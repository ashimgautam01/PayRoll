import mongoose, { Schema } from "mongoose";

const leaveSchema=new Schema({
    employee:{
        type:mongoose.Types.ObjectId,
        ref:"Employee"
    },
    leaveType:{
        type:String,
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    },
    reason:{
        type:String
    },
    status:{
        type:String,
        enum:["approved","rejected","pending"],     
        default:"pending"
    },
})

const Leave=mongoose.model("Leave",leaveSchema)

export default Leave