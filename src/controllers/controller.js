const validation = require("../validation.js");



const loginUser = async function (req, res) {
    let reqData = req.body;
  
    if (!validation.validateEmail(reqData.email)) {
      return res.status(400).send({ status: false, msg: "Invalid email." });
    }
  
    if (!validation.validateString(reqData.password)) {
      return res.status(400).send({ status: false, msg: "Invalid password." });
    }
  
    let userName = reqData.email;
    let password = reqData.password;
  
    let user = await userModel.findOne({ email: userName, password: password });
    
    if (!user) {
      return res.status(401).send({ status: false, msg: "Wrong Credentials." });
    }
  
    let token = jwt.sign(
      {
        userId: user._id,
        payload,
        expiresIn
      },
      "projectThree"
    );
  
    res.status(200).send({ status: true, token: token });
  };


  module.exports.loginUser = loginUser;
  






