//import libraries and files
const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db="mongodb+srv://abhijeet:abhi6816@cluster0.knzmq.mongodb.net/Library_Management_System?retryWrites=true&w=majority"
const Bookroute=require("./routes/Bookroute");


//middleware setup
app.use(bodyParser.urlencoded({
    extended:false             
}))
app.use(bodyParser.json()); 





// API's connections
app.use('/',Bookroute);


// DB and server setup
mongoose.Promise=global.Promise;


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err)
    }
    else
    console.log("connected to db")
})



app.listen(4000, ()=>{
  console.log("Server is listening on port: 4000");
});


