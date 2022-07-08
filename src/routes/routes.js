const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController")
const bookController = require("../controllers/bookController");
const middleware = require("../middlewares/middleware");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//---------------------Route For Creating Users-----------------------------------//
router.post("/register", userController.registerUser)

router.post("/login", userController.loginUser)

router.post("/books",middleware.authentication, bookController.createBook);
router.get("/getbooks",middleware.authentication, bookController.getBooks);


module.exports = router;
