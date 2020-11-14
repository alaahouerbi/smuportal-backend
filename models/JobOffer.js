const mongoose = require("mongoose");
//model for a job offers 

const JobOfferSchema = new mongoose.Schema({
	title: {
   		 type: String,
   		 required: true,
   		 lowercase: true,
   		 min: 2,
   		 max: 255
	  },
	description:{
		type:String,
		min:2,
		max:5000,
	},
	postedOn:{
		type:Date,
		required:true,
		default:Date.now,
	},
		
});
module.exports = mongoose.model("JobOffer",JobOfferSchema);

