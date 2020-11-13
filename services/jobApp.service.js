const jobApp = require("../models/jobApp")

function jobAppService() {
  async function getJobApp() {
    return jobApp.find({})
  }
// this is really ugly needs to be changed Parameters are Upercase and fields are lowercase
	// posted on is set as default data.now in the model no need to add it here 
  async function addJobApp(Title,Description) {
    return jobApp.create({title: Title, description: Description}   
  )
  }
//is _id hidden will this work later with the front end? not sure
  async function deleteJobApp(id) {
    return jobApp.deleteOne({_id:id})
  }

  return {
    getJobApp,
    addJobApp,
    deleteJobApp
  }
}
module.exports=	jobAppService;
//this is not enough will return to it later

