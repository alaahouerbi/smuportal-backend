const jobApplication =require("../models/jobApplication");

function jobApplicationService(){
    //function to get JobApplication
    async function getJobApplication(){
        return jobApplication.find({})
    }
   //function to addAjobApplication needs a job app and a user
   async function addJobApplication(JobOffer,User){
       return jobApplication.create({JobOffer: JobOffer, User:User})
   }



return {
    getJobApplication,
    addJobApplication
}
}
module.exports=jobApplicationService;