const mongoose = require("mongoose");

const JobAppSchema = new mongoose.Schema({
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
module.export = mongoose.models("JobApp",JobAppSchema);

