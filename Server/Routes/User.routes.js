let express=require("express");
const { signup, signin } = require("../Controller/User.controller");

let Userroutes=express.Router();

Userroutes.post("/signup",signup);
Userroutes.post("/signin",signin);

module.exports=Userroutes