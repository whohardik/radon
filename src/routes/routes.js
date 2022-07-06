const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//---------------------Route For Creating Users-----------------------------------//
router.post("/register", userController.createUser)


module.exports =  router