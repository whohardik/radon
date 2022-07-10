
const {
  isValidReqBody,
  isValid,
  isValidObjectId,
  isValidRating
} = require("../validator/validation");

const reviewModel = require("../models/reviewModel");
const bookModel = require("../models/bookModel");
const { query } = require("express");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;





const createReview = async function (req, res) {

     const data = req.body;
  
      const {
        reviewedBy,
        reviewedAt,
        rating,
        review,
    
        

      } =  data;

      if (!isValidReqBody(data)) {
        return res
          .status(400)
          .send({ status: false, message: "Please provide the review details" });
      }

     

      if (!isValid(reviewedBy)) {
        return res.status(400).send({
          status: false,
          message: "Please provide the reviewedBy (required field)",
        });
      }

      if (!isValid(reviewedAt)) {
        return res.status(400).send({
          status: false,
          message: "Please provide the reviewedAt (required field)",
        });
      }



      if (!isValid(rating)) {
        return res.status(400).send({
          status: false,
          message: "Please provide the rating (required field)",
        });
      }
      if (!isValidRating(rating)) {
        return res.status(400).send({
          status: false,
          message: "Please provide the rating between 1-5",
        });
      }
      if (!isValid(review)) {
        return res.status(400).send({
          status: false,
          message: "Please provide the rating (required field)",
        });
      }
    

   let bookId = req.params.bookId
  if(!bookId) return  res.status(400).send({status:false,msg:'bookId in params is mandatory'})
    const checkBook = await bookModel.findById({_id: bookId, isDeleted : false})
        if(!checkBook) return res.status(400).send({status : false, msg : 'No such book available'})  
      const createdReview = await reviewModel.create(data)
      return res.status(201).send({status:true,data:createdReview})
    }


        
        




module.exports.createReview = createReview