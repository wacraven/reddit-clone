'use strict';

const mongoose = require('mongoose')

//every collection needs a model
module.exports = mongoose.model('Post', {
	username: String,
	title: String,
	url: String,
	imageURL: String,
	score: Number
});
