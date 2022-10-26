'use strict'
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(()=>{
          console.log("base de datos cargada");
        })
        .catch(err => console.log(err));