import dotenv from 'dotenv';
import express from 'express'


import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

const app = express();

connectDB()
.then(() =>{
    app.on("error", (error)=>{
        console.log("Error", error);
        throw error;
        
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running`);
    }) 
}) 
.catch((error) =>{
    console.log("Error: ", error);
})

// conneting db in index.jsx
/* import mongoose from 'mongoose'
import express from 'express'
import { DB_NAME } from './constants';

const app = express();


(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`/${DB_NAME})
        app.on("error", (error) =>{
            console.log("error: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`APP Listning on port: ${process.env.PORT}` );
            
        })
    } catch (error) {
        console.error('Error:' , error);
    }
})() */