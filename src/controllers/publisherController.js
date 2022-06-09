const publisherModel= require("../models/publishermodel")



const createPublisher= async function (req, res) {
    let author = req.body
    let publisherCreated = await publisherModel.create(author)
    res.send({data: publisherCreated})
}

const getpublishersData= async function (req, res) {
    let publisher= await publisherModel.find()
    res.send({data: publisher})
}
module.exports.createPublisher= createPublisher
module.exports.getpublishersData= getpublishersData