const userModel = require("../models/bookModel")

const getBooks = async function(req,res){
    try{
        let querydata = req.query

        let userId = isValidObjectId(req.query.userId)
        {
        if(!userId) return res.status(400).send({status : false, msg : "Please enter a valid userId"})
        }
        const data = await bookModel.find(querydata)({$and : [ { isDeleted : false,book_id: _id, title: title,excerpt: excerpt,userId: userId,category: category,reviews: reviewes,releasedAt: releasedAt, ...querydata}]})
        if(data.length==0) return res.status(404).send({status : false, msg : "No data found"})



        res.status(200).send({status : true, data : data})
    }
    catch(err){
        res.status(500).send({status: false, msg : err.message})
    }
}