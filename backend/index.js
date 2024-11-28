import express from 'express'
import { config } from 'dotenv'
import connectDB from './db/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
config()
const PORT =process.env.PORT
const app=express()
app.use(cors({
    origin:" http://localhost:5173",
    methods:["POST","GET","PATCH","PUT","DELETE"],
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())


//db
connectDB()


// routes import
import userRouter from './routes/user.routes.js'
import userProfileRouter from './routes/userProfile.routes.js'
import companyRouter from './routes/company.routes.js'
import employeeRouter from './routes/employee.routes.js'

app.use(express.urlencoded({ extended: true })); 
app.use('/api/v1/users',userRouter)
app.use('/api/v1/profile',userProfileRouter)
app.use('/api/v1/company',companyRouter)
app.use('/api/v1/employee',employeeRouter)


app.get('/', (req, res) => res.send('Server is running'));




//server run
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})

