'use strict'
import { MONGODB_URI } from './config';
import { PORT } from './config';

var mongoose = require('mongoose');
var app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI)
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(PORT, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:", PORT);
        	});

        })
        .catch(err => console.log(err));