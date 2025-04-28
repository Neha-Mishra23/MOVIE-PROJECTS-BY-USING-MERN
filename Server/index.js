let express=require("express");
let cors=require("cors");
const connection = require("./Config/db");
const Userroutes = require("./Routes/User.routes");
require("dotenv").config();
const cookieParser = require('cookie-parser');
const Movieroutes = require("./Routes/Movies.routes");
let app=express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
app.use("/api/movies",Movieroutes);
app.use("/api/user",Userroutes);

app.listen(process.env.PORT||3000,async()=>{
    try {
        await connection;
       console.log("Server was Created");  
    } catch (error) {
         console.log(error);
    }
})


