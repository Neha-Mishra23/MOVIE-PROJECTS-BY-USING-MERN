let express=require("express");
const { createmovies, getmoviesuser, deletemoviesuser, updatedate } = require("../Controller/Movies.controller");
const isAuth = require("../Middleware/Auth.middelware");
const isAdmin = require("../Middleware/admin");


let Movieroutes=express.Router();
// Create Movies Details;
Movieroutes.post("/createmovies",isAuth,isAdmin,createmovies);
// get movies 
Movieroutes.get("/",isAuth,getmoviesuser);
// delete movies
Movieroutes.delete("/deletemovies/:moviesid", isAuth,isAdmin, deletemoviesuser);
// Update data
Movieroutes.patch("/Updatedata/:moviesid",isAuth,isAdmin,updatedate);



module.exports=Movieroutes;