const mongoose=require("mongoose")

// Contactschema

const Contactusschema=mongoose.Schema({

    name:{
        required:true,
        type:String
    },
    email:{     
        required:true,
        type:String
    },
    country:{     
        required:true,
        type:String
    },
    contactNumber:{
             
        required:true,
        type:Number
    },
    message:{
             
        required:true,
        type:String
    }
})

module.exports=mongoose.model("contactus",Contactusschema)