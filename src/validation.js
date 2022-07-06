const validateEmail = function (value) {
    let email = value;
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validEmail = re.test(email);
  
    if (!validEmail) {
      return false;
    }
  
    return true;
  };


  //maxLength = 100
const validateString = function validateString(value) {
    if (!value) {
      return false;
    }
  
    if (typeof value == "string") {
      return true;
    }
  
    return false;
  };


  module.exports.validateString = validateString;
  module.exports.validateEmail = validateEmail;