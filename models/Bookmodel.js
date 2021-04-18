const mongoose = require("mongoose"); //INITIALISE MONGOOSE 


//The Schema allows you to define the fields stored in each document along with their validation requirements and default values. 
const Schema = mongoose.Schema; //SCHEMA DEFINED

//BY PASSING ANY CUSTOMISED OBJECT OF REQUIRED TYPE INTO THE SCHEMA FUNCTION WE CAN CREATE OUR OWN
//CUSTOMISED OBJECT SCHEMA
const bookSchema = new Schema({

    Name:{
        type:String, required:true
    },
    Author:{
        type:String, required:true
    },
    Subject:{
        type:String, required:true
    },
    Availability:{
        type:Boolean, default:true
    },
    Issuedate:{
        type:String, default:null
    },
    Expirydate:{
        type:String, default:null
    },
    Ownername:{
        type:String, default:null
    },
    Ownercontact:{
        type:String, default:null
    }

})

 //Schemas are  "compiled" into models using the mongoose.model() method. simply by mongoose.model we can decide which schema or template is to be used in our collection.
module.exports=mongoose.model('Books',bookSchema) 


