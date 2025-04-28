let mongoose=require("mongoose");
require("dotenv").config();

let connection=mongoose.connect(process.env.Mongoose_Url);

module.exports=connection