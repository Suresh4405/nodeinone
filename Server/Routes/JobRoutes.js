const express = require("express")

const router = express.Router()

const Jobs =require("../model/Jobmodel")

const authenticat=require("../Midddleware/authenticate")


router.post("/add-jobs",authenticat,async (req,res)=>{
try {

    const jobs=await new Jobs(req.body)
    await jobs.save()
    console.log(jobs);
 
    res.send({
        success:true,
        message:"Jobs added sucessfully"
    })
 

} catch (error) {
    res.send({
        success:false,
        message:"something went wrong"
    })
}
})


router.get("/get-jobs",async(req,res)=>{

try {
    const jobs= await Jobs.find()

// console.log(movie);
    res.send({
        success:true,
        message:"Jobs fetch sucessfully",
        data:jobs,
    })

} catch (error) {
    res.send({
        success:false,
        message:"Something went wrong "
    })
}
})

router.post("/delete-jobs",authenticat,async(req,res)=>{
    try {
        
   
    await Movie.findByIdAndDelete(req.body.jobsId)
    res.send({
        success:true,
        message:"Deleted sucessfully",
        
    })
} catch (error) {

     res.send({
        success:false,
        message:"Unable to delete"
    })   
}

})


router.post("/Edit-jobs",async(req,res)=>{

    try {

    await Jobs.findByIdAndUpdate(req.body.jobsId,req.body)

        res.send({
            success:true,
            message:" Jobs Updated sucessfully"
        })
        
    } catch (error) {
        console.log(error);
        res.send({
            success:false,
            message:"cant able to update"
        })
    }
})


// particular id to navigate particular page


router.get("/get-jobs-by-id/:id", async (req, res) => {
    try {
      const jobs = await Jobs.findById(req.params.id);
  
      res.send({
        success: true,
        message: "Jobs show successfully",
        data: jobs,
      });
    } catch (err) {
      res.send({
        success: false,
        message: "Something went something wrong",
      });
      console.log(err);
    }
  });


module.exports=router


