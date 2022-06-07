const express = require('express');
const router = express.Router();
const UserModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )

router.get("/getBookList", BookController.getBookList)

router.get("/getBooksInYear", BookController.getBooksInYear)

router.get("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXinrBooks", BookController.getXinrBooks)

router.get("/ getRandomBooks", BookController. getRandomBooks)

module.exports = router;