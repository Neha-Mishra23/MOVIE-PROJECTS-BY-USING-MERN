let mongoose=require("mongoose");


let UserSchema=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
},{
    timestamps:true,
    versionKey:false
})

let Usermodel=mongoose.model("user",UserSchema);

module.exports=Usermodel;