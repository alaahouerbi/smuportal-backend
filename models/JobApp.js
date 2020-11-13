const mongoose = require("mongoose");

const JobAppSchema = new mongoose.Schema({
	Title: {
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
	Description:{
		type:String,
		min:2,
		max:5000,
	},
});
module.export = mongoose.models("JobApp",JobAppSchema);

