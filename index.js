'use strict'
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
import { PORT } from './config.js';
import  app from "./app.js";




  app.listen(PORT);
  console.log("Server on port", PORT);;