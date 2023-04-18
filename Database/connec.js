const mongoose = require("mongoose")
const DB = process.env.CLOUD_DATABASE
mongoose.set('strictQuery', true);
mongoose.connect("").then(()=>{console.log("Connection Successful")}).catch((error)=>{console.log(error)});
