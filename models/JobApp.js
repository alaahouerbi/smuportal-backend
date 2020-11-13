const mongoose = require("mongoose");

const JobAppSchema = new mongoose.Schema({
	title: {
   		 type: String,
   		 required: true,
   		 lowercase: true,
   		 min: 2,
   		 max: 255
	  },
	jobAppId:{
		 type:number
		 unique:true
		 required: true,
   		 min: 1000000000,
   		 max: 9999999999999,
	},
	description:{
		type:String,
		min:2,
		max:5000,
	},
	postedOn:{
		type:Date,
		required:true,
	},
		
});
module.export = mongoose.models("JobApp",JobAppSchema);

