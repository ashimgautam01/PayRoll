import mongoose, { Schema } from "mongoose";


const salarySchema=new Schema({
    employee:{
        type:mongoose.Types.ObjectId,
        ref:"Employee"
    },
    salary:{
        type:Number
    },
    allowance:{
        type:Number
    },
    bonus:{
        type:Number
    },
    deduction:{
        type:Number
    },
    status:{
        type:String,
        enum:["paid","Not paid"],
        default:"Not paid"
    },
    payDate:{
        type:Date,
        default:Date.now
    }
})


const Salary=mongoose.model("Salary",salarySchema)

export default Salary