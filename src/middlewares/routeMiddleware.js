const jwt = require("jsonwebtoken");


const authenticate = function (req, res, next) {
    try {
      let token = req.headers["x-api-key"];
      if (!token) {
        return res
          .status(400)
          .send({ status: false, msg: "Please provide token in header" });
      }
  
      let decodedToken = jwt.verify(token, "projectThree");
      if (!decodedToken) {
        return res
          .status(400)
          .send({ status: false, Msg: "Token is not correct" });
      }
      req.token = decodedToken;
      next();
    } catch (err) {
      res
        .status(400)
        .send({ status: false, msg: "Token is not in right format " });
    }
  };



  module.exports.authenticate = authenticate;