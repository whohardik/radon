const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")
const authorModel= require("../models/authorsModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createAuthor", bookController.createAuthor )

router.post("/createBook", bookController.createBook)

router.post("/getBooksbyChetanBhagat", bookController.getBooksbyChetanBhagat)
router.post("/authorofBook", bookController.authorofBook)


module.exports = router;