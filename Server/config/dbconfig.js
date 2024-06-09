const mongoose =require("mongoose")

mongoose.connect(process.env.MOngodb_url,{
    dbName:"NINJA-SCRIBE"
})


const isconnection= mongoose.connection

isconnection.on("connected",()=>{
    console.log("Mongodb connected Sucessfully !!!");
})
isconnection.on("Failed",(err)=>{
console.log("Error to connect Database",err);
})