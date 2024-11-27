import express from 'express'
import { config } from 'dotenv'
import connectDB from './db/db.js'
import cookieParser from 'cookie-parser'
config()

const app=express()
const PORT =process.env.PORT
app.use(express.json())
app.use(cookieParser())

//db
connectDB()


// routes import
import userRouter from './routes/user.routes.js'
import userProfileRouter from './routes/userProfile.routes.js'
import issueRouter from './routes/issue.routes.js'


app.use(express.urlencoded({ extended: true })); 
app.use('/api/v1/users',userRouter)
app.use('/api/v1/profile',userProfileRouter)
app.use('/api/v1/issue',issueRouter)


app.get('/', (req, res) => res.send('Server is running'));




//server run
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})

