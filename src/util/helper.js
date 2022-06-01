const printdate = function(){
    const d = new Date()
    console.log(d.getMonth())
}
module.exports.printdate=printdate

const printMonth= function(){
    console.log("june")
}
module.exports.getMonth = printMonth

const getBatchInfo=function(){
    console.log(" Roadon, W3D1, the topic for today is Nodejs module system")
}
module.exports.getBatchInfo=getBatchInfo