const mongoose = require("mongoose");
//const { schema } = require("./JobOffer"); somehow this line made it crash throwing overwrite module or something
//model for a job applications

const jobApplicationSchema = new mongoose.Schema({
    JobOffer:{
        type: mongoose.Schema.Types.ObjectId,
      ref: 'jobOffer',
      required: true
    },
    User:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    AppliedOn:{
        type:Date,
        default:Date.now
    }

    
});
module.exports=mongoose.model("JobApplication",jobApplicationSchema);