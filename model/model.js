const mongoose = require('mongoose');

var blogSchema= new mongoose.Schema({
	title:{required: true, type: String} ,
	image:{type:String},
	body: {required: true, type:String},
	created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Blog', blogSchema)