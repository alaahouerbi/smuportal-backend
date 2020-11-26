const jobApplication =require("../models/jobApplication");
//const JobOffer = require("../models/JobOffer"); //somehow this line makes everything bug
const jobOfferService = require("./jobOffer.service");

function jobApplicationService(){
    //function to get JobApplication
    async function getJobApplication(){
        return jobApplication.find({})
    }
    //returns job applications made to the job offer the current user created
   async function getJobApplicationByOfferUser(id){
        const query ={};
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
       return jobApplication.create({JobOffer: JobOffer, User:User})
   }



return {
    getJobApplication,
    addJobApplication,
   getJobApplicationByOfferUser
}
}
module.exports=jobApplicationService;