const userModel = require("../models/userModel")

const validator = require("email-validator")

//--------------------Handler For Creating user-----------------------------//
const createUser = async function (req, res){
    try{
        let data = req.body

        if(Object.keys(data).length == 0){
            return res.status(400).send({
             status: false,
             msg : "Please provide the input"
            })
         }
         if ((typeof(data.title) != "string") || data.title.trim().length==0) {
            return res.status(400).send({
                status: false,
                msg: "title is Missing or has invalid input"
            })
        }

         if ((typeof(data.name) != "string") || !data.name.match(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]+$/)) {
            return res.status(400).send({
                status: false,
                msg: "user Name is Missing or should contain only alphabets"
            })
        }
        
        if((typeof(data.phone) != "string") || !data.phone.match(/^[6-9]\d{9}$/)){
            return  res.status(400).send({
                  status : false,
                  msg : "Not a valid Mobile Number"  
              })
          }
          let number =  await userModel.findOne({mobile : data.phone})
          if(number){
              return res.status(400).send({
                  status: false,
                  msg: "Number already Registred"
              }) 
          }
        if ((typeof(data.email) != "string") || data.email.trim().length==0) {
            return res.status(400).send({
                status: false,
                msg: "Email is Missing or has invalid input"
            })
        }
        if (!validator.validate(data.email)) {
            return res.status(400).send({
                status: false,
                msg: "Email-Id is invalid"
            })
        }
        //Checks For Unique Email Id
        let checkEmail = await userModel.findOne({ email: data.email , isDeleted : false})
        if (checkEmail) {
            return res.status(400).send({
                status: false,
                msg: "Email Id already Registred"
            })
        }


        
        if ((typeof(data.password) != "string") || !data.password.match(/?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/)) {
            return res.status(400).send({
                status: false,
                msg: "user paswword is  not in vaild format"
            })
        }
        if ((typeof(data.address) != "string") || data.address.trim().length==0) {
            return res.status(400).send({
                status: false,
                msg: "address is Missing or has invalid input"
            })
        }
      
        let savedData = await userModel.create(data)
        res.status(201).send({
            status : true,
            data : savedData
        })

    }
    catch(err){
        console.log("Error is From Creating user :", err.message)
        res.status(500).send({
            status : false,
            msg : err.message
        })
    }
}
module.exports.createUser =createUser