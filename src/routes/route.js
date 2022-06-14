const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw=require("../midleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",mw.auth, userController.getUserData)

router.put("/users/:userId",mw.auth, userController.updateUser)
router.delete("/users/:userId",mw.auth, userController.deletUser)

module.exports = router;