import express from 'express'
import { config } from 'dotenv'
import connectDB from './db/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
config()
const PORT =process.env.PORT || 3000
const app=express()
app.use(cors({
    origin: "https://payfront-peach.vercel.app",
    methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
    credentials: true
}));


app.use(express.json())
app.use(cookieParser())


//db
connectDB()


// routes import
import userRouter from './routes/user.routes.js'
import userProfileRouter from './routes/userProfile.routes.js'
import companyRouter from './routes/company.routes.js'
import employeeRouter from './routes/employee.routes.js'
import salaryRouter from './routes/salary.routes.js'
import leaveRouter from './routes/leave.routes.js'

app.use(express.urlencoded({ extended: true })); 
app.use('/api/v1/users',userRouter)
app.use('/api/v1/profile',userProfileRouter)
app.use('/api/v1/company',companyRouter)
app.use('/api/v1/employee',employeeRouter)
app.use('/api/v1/salary',salaryRouter)
app.use('/api/v1/leave',leaveRouter)

app.get('/', (req, res) => {
    console.log("hi");
    res.json("hello")
});




//server run
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})

