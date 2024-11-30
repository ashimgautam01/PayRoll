import mongoose, { Schema } from "mongoose";

const monthlySchema=new Schema({
    company:{
        type:mongoose.Types.ObjectId(),
        ref:"Company"
    },
    month:{
        type:String
    },
    employees:{
        type:Number,
    },
    revenue:{
        type:Number
    },
    expense:{
        type:Number,
    },
    payroll:{
        type:Number
    },
    positions:{
        type:Number
    }
})

const Monthly=mongoose.model("Monthly",monthlySchema)

export default Monthly