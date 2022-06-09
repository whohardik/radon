const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },

    newPublisher_id: {
        type: ObjectId,
        ref: "newPublisher"
    },
    price: Number,
    rating: Number


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
