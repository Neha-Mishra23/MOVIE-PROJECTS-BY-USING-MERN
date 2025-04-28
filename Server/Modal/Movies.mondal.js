let mongoose=require("mongoose");


let MoviesSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Genre:{
        type:String,
        required:true
    },
    Director:{
        type:String,
        required:true
    },
    ReleaseYear:{
        type:Number,
        required:true
    }, 
    Description:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
});


let Moviemodel=mongoose.model("movie",MoviesSchema);

module.exports=Moviemodel