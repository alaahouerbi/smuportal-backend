const jobApp = require("../models/jobApp")
function jobAppService() {
  async function getJobApp() {
    return JobApp.find({})
  }
// this is really ugly needs to be changed Parameters are Upercase and fields are lowercase
	// postedon is set as default now in the model should i still specify it here ??
  async function addJobApp(Title,Description) {
    return jobApp.create({title: Title, description: Description, postedOn: Date.now}   
  )
  }
//specifying the title is not enough will fix later
  async function deleteJobApp(Title) {
    return JobApp.deleteOne({title:Title})
  }

  return {
    getJobApp,
    deleteJobApp,
    addJobApp
    
    
  }
}
module.exports=	jobAppService;
//this is not enough will return to it later

