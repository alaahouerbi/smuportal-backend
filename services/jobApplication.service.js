const { Mongoose } = require("mongoose");
const jobApplication =require("../models/jobApplication");
const jobOffer = require("../models/jobOffer");
//const JobOffer = require("../models/JobOffer"); //somehow this line makes everything bug
const jobOfferService = require("./jobOffer.service");

function jobApplicationService(){
    //function to get JobApplication
    async function getJobApplication(){
        return jobApplication.find({})
    }
    //returns job applications made to the job offer the current user created
   async function getJobApplicationByOfferUser(id){
        const query ={_id:id};
        return (jobApplication.find(query)
        .populate({
            path:'jobOffer',
            select:"User",
            populate:{
                path:"User",
                select:"_id"
            }
        }).find({}) // this is wrong TA will have to look into this
        .lean().exec());
    }
   //function to addAjobApplication needs a job app and a user
   async function addJobApplication(JobOffer,User){
      try{ 
      var id=jobApplication.create({JobOffer: JobOffer, User:User});
      var jobo=jobOffer.findById(JobOffer._id);
      jobo.jobApps.push(id);
      
      return (await jobo).save();
     
   }catch(error){
       console.log(jobo);
       throw error;
   }
}



return {
    getJobApplication,
    addJobApplication,
   getJobApplicationByOfferUser
}
}
module.exports=jobApplicationService;