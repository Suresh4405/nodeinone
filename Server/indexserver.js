const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
require("dotenv").config();

const dbconfig = require("./config/dbconfig")

const Userroutes= require("./Routes/userRoutes")
const Jobroutes =require("./Routes/JobRoutes")

app.use("/user",Userroutes)

app.use("/jobs",Jobroutes)

app.get("/",(req,res)=>{
res.send("good")
})




app.listen(7777,()=>{
    console.log("connect with port 7777");
})