const Router = require("express").Router;
const jobApplicationService = require("../../services/jobApplication.service")();
const jobApplication = require("../../models/jobApplication");

const router = Router({
    mergeParams: true,
});
//route to get Job Applications
router.get("/getJobApplication", async(req,res)=> {
    try{
        const jobApplication = await jobApplicationService.getJobApplication();
        res.send(jobApplication);
    }catch(err){
        res.json({succes: false , msg:"Failed to get job Applications"});
    }
});

//route to add A job Application

router.post