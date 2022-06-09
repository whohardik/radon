const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel");
const publishermodel = require("../models/publishermodel");

const createBook= async function (req, res) {
    let book = req.body;
    let authorID= req.body.author_Id;
    let publisherId = req.body.publisher_Id;


    if(!authorID){
        return res.send({msg: "Author Id is required"})
    }

    let author= await authorModel.findOne({_id: authorID});
    if(!author){
        return res.send({msg: "Author id is not present"});
    }
    
    if(!publisherId){
        return res.send({msg: "Publisher Id is required"})
    }

    let publisher= await publishermodel.findOne({_id: publisherId});

    if(!publisher){
        return res.send({msg: "Publisher id is not present"});
    }

    else{
        let bookCreated = await bookModel.create(book)
        res.send({data: bookCreated})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_Id' ).populate('publisher_Id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
