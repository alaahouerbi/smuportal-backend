const Router = require("express").Router;
const jobApplicationService = require("../../services/jobApplication.service")();
const {verifyToken} = require("../../helpers/verifyToken");
const jobApplication = require("../../models/jobApplication");
const User = require("../../models/User");

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
router.post("/applyForJob/:joboffer",verifyToken, async(req,res)=>{
    try{
        let user=await User.findById(req.decodedToken._id);
        const job=req.params.joboffer;
        await jobApplicationService.addJobApplication(job,user);
        res.send({ success: true, msg: "Job application Added" });
    }catch (err) {
        res.send({ success: false, msg: "Job application not Added!", err:err });
      }
});
module.exports = router;
//router.post