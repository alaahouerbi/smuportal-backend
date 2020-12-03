const mongoose = require("mongoose");
//const { schema } = require("./JobOffer"); somehow this line made it crash throwing overwrite module or something
//model for a job applications

const jobApplicationSchema = new mongoose.Schema({
    JobOffer:{
        type: mongoose.Schema.Types.ObjectId,
      ref: 'JobOffer',
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
//attemp to index jobOffer and User to be unique i must drop schema first i guess
jobApplicationSchema.index({ 'JobOffer':1,'User':1 },{ unique:true });
module.exports=mongoose.model("JobApplication",jobApplicationSchema);