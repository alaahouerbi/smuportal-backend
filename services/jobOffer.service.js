const jobOffer = require("../models/jobOffer")

function jobOfferService() {
  async function getjobOffer() {
    return jobOffer.find({})
  }
// this is really ugly needs to be changed Parameters are Upercase and fields are lowercase
	// posted on is set as default data.now in the model no need to add it here 
  async function addjobOffer(Title,Description) {
    return jobOffer.create({title: Title, description: Description}   
  )
  }
//is _id hidden will this work later with the front end? not sure
  async function deletejobOffer(id) {
    return jobOffer.deleteOne({_id:id})
  }

  return {
    getjobOffer,
    addjobOffer,
    deletejobOffer
  }
}
module.exports=	jobOfferService;
//this is not enough will return to it later
//not sure ama 3adi
