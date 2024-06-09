const mongoose=require("mongoose")

// JobSchema

const Jobschema=mongoose.Schema({

    jobtitle:{
        required:true,
        type:String
    },
    Roles:{     
        required:true,
        type:String
    },
    Skills:{     
        required:true,
        type:String
    },
    Education:{
             
        required:true,
        type:String
    },
    Experience:{
             
        required:true,
        type:String
    },
    Location:{
             
        required:true,
        type:String
    },
    Salary:{
             
        required:true,
        type:String
    },
    Posted:{
        required:true,
        type:String
    },
})

module.exports=mongoose.model("Jobs",Jobschema)