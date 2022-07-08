const bookModel = require("../models/bookModel");
const {
  isValidReqBody,
  isValid,
  isValidSubcategory,
  isValidObjectId,
  isValidRelAt,
  isValidISBN,
} = require("../validator/validation");
const userModel = require("../models/userModel");
const reviewModel = require("../models/reviewModel");
const { query } = require("express");

//------------------------------------------------------------------------------------------------------------------------------------------------------

const createBook = async function (req, res) {
  try {
    // book details sent through request body
    const data = req.body;

    const {
      title,
      excerpt,
      userId,
      ISBN,
      category,
      subcategory,
      isDeleted,
      releasedAt,
    } = data;

    // VALIDATIONS:

    // if request body is empty
    if (!isValidReqBody(data)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide the book details" });
    }

    // if title is empty
    if (!isValid(title)) {
      return res.status(400).send({
        status: false,
        message: "Please provide the title (required field)",
      });
    }
    // title duplication check
    const isDuplicateTitle = await bookModel.findOne({ title: title });
    if (isDuplicateTitle) {
      return res
        .status(400)
        .send({ status: false, message: "Title is already used!" });
    }

    // if excerpt is empty
    if (!isValid(excerpt)) {
      return res.status(400).send({
        status: false,
        message: "Please provide the excerpt (required field)",
      });
    }

    // if userId is empty
    if (!isValid(userId)) {
      return res.status(400).send({
        status: false,
        message: "Please enter userId (required field)",
      });
    }
    // if userId is invalid
    if (!isValidObjectId(userId)) {
      return res.status(400).send({
        status: false,
        message: "userId is invalid!",
      });
    }
    // if userId does not exist (in our database)
    const userIdInDB = await userModel.findById(userId);
    if (!userIdInDB) {
      return res
        .status(404)
        .send({ status: false, message: "UserId does not exist" });
    }
    // 📌 AUTHORISATION: if userId (in token) !== userId (in req.body)
    if (userId !== req.userId) {
      return res.status(401).send({
        status: false,
        message: `Authorisation Failed: You are logged in as ${req.userId} not ${userId}`,
      });
    }

    // if ISBN is empty
    if (!isValid(ISBN)) {
      return res.status(400).send({
        status: false,
        message: "Please provide the ISBN (required field)",
      });
    }
    // if ISBN is invalid
    if (!isValidISBN(ISBN)) {
      return res.status(400).send({
        status: false,
        message: "ISBN is invalid",
      });
    }
    // ISBN duplication check
    const isDuplicateISBN = await bookModel.findOne({ ISBN: ISBN });
    if (isDuplicateISBN) {
      return res
        .status(400)
        .send({ status: false, message: "ISBN is already used!" });
    }

    // if category is empty
    if (!isValid(category)) {
      return res.status(400).send({
        status: false,
        message: "Please provide the category (required field)",
      });
    }

     // if subcategory is an array then validating each element
     if (Array.isArray(subcategory)) {
      for (let i = 0; i < subcategory.length; i++) {
        element = subcategory[i];
        if (!isValid(element)) {
          return res.status(400).send({
            status: false,
            message: 'subcategory is (required field) format like: ["Fiction","Classic"]',
          });
        }
      }
    }

    // if subcategory is empty
    // if (!isValidSubcategory(subcategory)) {
    //   return res.status(400).send({
    //     status: false,
    //     message: "Please provide the subcategory (required field)",
    //   });
    // }

    // if releasedAt is empty
    if (!isValid(releasedAt)) {
      return res.status(400).send({
        status: false,
        message: "Please provide the book release date (required field).",
      });
    }
    // if releasedAt is invalid (format)
    if (!isValidRelAt(releasedAt)) {
      return res.status(400).send({
        status: false,
        message: "Please follow the format YYYY-MM-DD for book release date",
      });
    }

    // if "isDeleted": true
    if (isDeleted) {
      return res.status(400).send({
        status: false,
        message: "isDeleted cannot be true during creation!",
      });
    }

    // if deletedAt is entered
    delete data.deletedAt;

    //creating book
    const createdBook = await bookModel.create(data);

    // response
    res.status(201).send({
      status: true,
      message: "Sucess",
      data: createdBook,
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};


const getBooks = async function(req,res)
{
    try {
         let query = req.query 
   let {userId,category,subcategory} = query

const data = req.body
if(data.isDeleted==false){
const newdata = await bookModel.find(query).select({book_id:1,title:1, excerpt: 1,userId:1,category:1,releasedAt:1,}).sort({ title: 1 })
if(newdata.length==0) return res.status(404).send({status : false, msg : "No data found"})
console.log(newdata)
res.status(200).send({status : true, data : newdata})
}
}
catch(error){
    res.status(500).send({
        status: false,
        message: "Internal Server Error",
        error: error.message,
      });
}
}
module.exports.createBook=createBook;
module.exports.getBooks=getBooks;