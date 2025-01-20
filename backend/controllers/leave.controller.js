import Leave from "../models/leave.Model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

const applyLeave=asyncHandler(async(req,res)=>{
    const {employee,leaveType,startDate,endDate}=req.body
    if(!employee){
        throw new ApiError(400,"employee is required")
    }
    const newleave=await Leave.create({
        employee,
        startDate,
        endDate,
        leaveType
    })
    if(!newleave){
        throw new ApiError(401,"failed to create a leave")
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            "leave created",
            newleave
        )
    )
})

const getLeave=asyncHandler(async(req,res)=>{
    const employee=req.body
    const leave=await Leave.find({employee:employee})
    if(!leave){
        throw new ApiError(400,"no leave found")
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            "leave found",
            leave
        )
    )
})

const changeStatus=asyncHandler(async(req,res)=>{
    const id=req.params
    const {status}=req.body
    const leave=await Leave.findById({_id:id})
    if(!leave){

        throw new ApiError(400,"no leave found")
    }
    const changed=await Leave.findByIdAndDelete({_id:id},
        {$set:{status}},
        {new:true}
    )
    if(!changed){
        throw new ApiError(400,"failed to update status")
    }
    return res.status(200).json(
        new ApiResponse(
            200,
            "changed status",
            changed
        )
    )
})

export {applyLeave,getLeave,changeStatus}