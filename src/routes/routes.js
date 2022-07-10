const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController")
const bookController = require("../controllers/bookController");
const reviewController = require("../controllers/reviewController");

const middleware = require("../middlewares/middleware");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//---------------------Route For Creating Users-----------------------------------//
router.post("/register", userController.registerUser)

router.post("/login", userController.loginUser)

router.post("/books",middleware.authentication, bookController.createBook);
router.get("/books",middleware.authentication, bookController.getBooks);
router.post("/books/:bookId/review", reviewController.createReview);


module.exports = router;
