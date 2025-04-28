require("dotenv").config;
let jwt = require('jsonwebtoken');
let isAuth=(request,response,next)=>{
   let token=request.cookies.Verificationtoken;
    if(!token){
        return response.status(400).json({
            message:"Unauthorized: Token not found"
        })
    }
    

    jwt.verify(token, process.env.Jwt_privateKey,  function(err, decoded) {
         if(err){
            return response.status(200).json({
                message:err.message
            })
         }
         if(!decoded){
            return response.status(200).json({
                message:"Invalid Token"
            })
         }
       
        request.User=decoded.user;
        next();
      });
}
module.exports=isAuth;