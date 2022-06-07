const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorsModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getBooksbyChetanBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data[0].author_id})
  res.send({msg:bookData})
}


const authorofBook= async function (req, res) {
  let data=await BookModel.findOneAndUpdate({name:"two states"},{$set:{prices:100}},{new:true})
  let authorData=await AuthorModel.find({author_id:data.author_id}.select("author_name"))
  let price= data.prices
     
     res.send( { msg: authorData,price})
}







// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
module.exports.authorofBook= authorofBook
