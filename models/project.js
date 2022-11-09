'use strict'

import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String
});

export default mongoose.model('Project', ProjectSchema);
// projects  --> guarda los documents en la coleccion