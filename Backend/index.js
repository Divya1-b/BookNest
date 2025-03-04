// const express = require('express')
// const dotenv=require("dotenv")
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userrouter from "./route/user.route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT||4000;
const URL=process.env.MongoDBURL;
// connect to mongodb
try{
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected to mongodb")
}catch(error){
    console.log("error",error);
}
// defining routes
app.use("/book",bookRoute);
app.use("/users",userrouter);
app.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}`)
})