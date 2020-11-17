const mongoose = require("mongoose");
const { schema } = require("./JobOffer");
//model for a job applications

const jobApplicatioSchema = new mongoose.Schema({
    JobOffer:{
        type: Schema.Types.ObjectId,
      ref: 'jobOffer',
      required: true
    },
    User:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    AppliedOn:{
        type:Date,
        default:Date.now
    }

    
});
module.exports=mongoose.model("JobApplication",jobApplicatioSchema);