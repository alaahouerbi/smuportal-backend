const Router = require("express").Router;
const jobAppService = require("../../services/jobApp.service")();
const jobApp = require("../../models/jobApp");

const router = Router({
  mergeParams: true,
});
//route to get Job Applications
router.get("/getJobApp", async(req, res) => {
  try {
    const JobApps = await jobAppService.getJobApp();
    res.send(JobApps);
  } catch(err) {
    res.json({ success: false, msg: "Failed to get Job Application"});
  }
});

//route to Add a job Application

router.post("/addJobApp",async(req,res,next)=>{
	try{
		const{Title,Description}=req.body;
		await.jobAppService.addJobApp(Title,Description);
		 res.send({ success: true, msg: "Job Added"});
    } catch (err) {
        res.send({ success: false, msg: "Job not Added!", err})
    }
});

//route de delete a job Application

router.delete("/deleteJobApp/:title", async(req, res) => {
  try {
    const title = req.params.title;
    jobAppService.deleteJobApp(title);
    res.send({ success: true, msg: "Job deleted deleted"})
  } catch (error) {
    res.send({ success: false, msg: "Job not deleted  not added!"})
  }
});

module.exports = router;
//this is far from over there is testing left to do

