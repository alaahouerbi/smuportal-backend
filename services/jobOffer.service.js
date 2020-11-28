const jobOffer = require("../models/jobOffer")
const jobApplicationService = require("./jobApplication.service")

function jobOfferService() {
  async function getjobOffer() {
    return jobOffer.find({})
  }
  async funtion addJobApplication(id){
    let update=jobApplicationService.addJobApplication
    await jobOffer.findByIdAndUpdate(id,{})
    
  }
// this is really ugly needs to be changed Parameters are Upercase and fields are lowercase
	// posted on is set as default data.now in the model no need to add it here 
  async function addjobOffer(Title,Description,userID) {
    return jobOffer.create({title: Title, description: Description,User:userID})
  }
  //get job applications
  async function getJobApplicationsForJobOffer(jobOfferID){
    return jobOffer.find({_id:jobOfferID})
    .select("jobApps -_id").lean().exec();
  }
//is _id hidden will this work later with the front end? not sure
  async function deletejobOffer(id) {
    return jobOffer.deleteOne({_id:id})
  }

  return {
    getjobOffer,
    addjobOffer,
    deletejobOffer,
    getJobApplicationsForJobOffer
  }
}
module.exports=	jobOfferService;
//this is not enough will return to it later
//not sure ama 3adi
