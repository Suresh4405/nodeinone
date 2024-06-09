const jwt = require("jsonwebtoken")

module.exports= function(req,res,next){
try {
    const giventoken = req.headers.authorization.split(" ")[1]
    const decrypt=jwt.verify(giventoken,process.env.jwt_secretekey)
    req.body.userid=decrypt.userid
    next()
    
} catch (error) {
 console.log("Error in Json webtoken");   
}
}