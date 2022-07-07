const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController")
const bookController = require("../controllers/bookController");
const middleware = require("../middlewares/middleware");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//===============>>===============[[[[[[[APIS FOR PROJECT3 Books Management]]]]]]]=============<<==================//

//====================Api to create a user=================================//

router.post("/register", userController.registerUser)

//======================Api to login a user================================//

router.post("/login", userController.loginUser)

//==============================Api to create a book=======================//

router.post("/books", middleware.authentication, bookController.createBook);

//=========================api to get the book data========================//

router.get("/books/:bookId", middleware.authentication, bookController.getBooksById);

//==================Api for updating books by bookId in path params========//

router.put("/books/:bookId", middleware.authentication, middleware.authorisation, bookController.updateBook);

//Api for deleting books by bookId in path params
router.delete("/books/:bookId",middleware.authentication,middleware.authorisation,bookController.deleteBook);

module.exports = router;