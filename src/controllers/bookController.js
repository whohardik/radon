const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {

     let allBooks= await BookModel.find( ).select({bookName: 1, authorName: 1,})
     res.send({msg: allBooks})
}

     const getBooksInYear= async function(req, res) {
         let publishingyear= req.body.getBooksInYear
         let allBooks= await bookModel.find({year: publishingyear})
         res.send({msg: allBooks})
}
     const getParticularBooks= async function (req, res) {
         let fetch = req.body
         let allBooks= await bookModel.find({$or:[{bookName: fetch.bookName},{tags : fetch.tags},{totalPages: fetch.totalPages}]})
         res.send({msg: allBooks})
}

const getXinrBooks= async function (req, res) {
    let innerBooks= await bookModel.find({ $or: [{"prince.indianPrice" : {$eq: "200inr"}}, {"price.indianPrice" : {$eq:"500inr"}}]})
    res.send({msg: allBooks})
}
     
const getRandomBooks= async function (req, res) {
    let allBooks= await bookModel.find({$or: [{totalPages:{$gt: "500"}}, {stockAvailable: true}] })
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXinrBooks= getXinrBooks
module.exports.getRandomBooks= getRandomBooks