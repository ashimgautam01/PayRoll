import express from 'express'
import { config } from 'dotenv'
import connectDB from './db/db.js'
config()

const app=express()
const PORT =process.env.PORT




//db
connectDB()

//server run
app.listen(()=>{
    console.log(`Server is running at ${PORT}`);
})

