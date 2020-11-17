const Router = require("express").Router;
const jobOfferService = require("../../services/jobOffer.service")();
const jobOffer = require("../../models/jobOffer");

const router = Router({
  mergeParams: true,
});
//route to get Job offers
router.get("/getjobOffer", async(req, res) => {
  try {
    const jobOffers = await jobOfferService.getjobOffer();
    res.send(jobOffers);
  } catch(err) {
    res.json({ success: false, msg: "Failed to get Job offer"});
  }
});

//route to Add a job offer

router.post("/addjobOffer",async(req,res,next)=>{
	try{
		const{Title,Description}=req.body;
		await jobOfferService.addjobOffer(Title,Description);
		 res.send({ success: true, msg: "Job Added"});
    } catch (err) {
        res.send({ success: false, msg: "Job not Added!", err})
    }
});

//route de delete a job offer

router.delete("/deletejobOffer/:id", async(req, res) => {
  try {
    const id = req.params.id;
    jobOfferService.deletejobOffer(id);
    res.send({ success: true, msg: "Job deleted deleted"})
  } catch (error) {
    res.send({ success: false, msg: "Job not deleted  not added!"})
  }
});

module.exports = router;
//seems to be working fine now deletejobOffer still needs some tweaks
