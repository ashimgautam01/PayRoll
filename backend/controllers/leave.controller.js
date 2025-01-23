import mongoose from "mongoose";
import Employee from "../models/employees.Model.js";
import Leave from "../models/leave.Model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";

const applyLeave = asyncHandler(async (req, res) => {
  const { employee, data } = req.body;
  if (!employee) {
    throw new ApiError(400, "employee is required");
  }
  const emp = await Employee.find({ _id: employee });
  const newleave = await Leave.create({
    employee,
    company: emp[0].company,
    startDate: data.startDate,
    endDate: data.endDate,
    reason: data.reason,
    leaveType: data.leaveType,
  });
  if (!newleave) {
    throw new ApiError(401, "failed to create a leave");
  }
  return res.status(200).json(new ApiResponse(200, "leave created", newleave));
});

const getLeave = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log("boy", id);
  const leave = await Leave.find({ employee: id });
  if (!leave) {
    throw new ApiError(400, "no leave found");
  }
  return res.status(200).json(new ApiResponse(200, "leave found", leave));
});

const getAllLeave = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const leave = await Leave.aggregate([
    { 
        $match: { company: new mongoose.Types.ObjectId(id) } 
    },
    {
        $lookup:{
            from:"employees",
            localField:"employee",
            foreignField:"_id" ,
            as:"Emp_Details"           
        }
    },
    {
        $project:{
            leaveType:1,
            startDate:1,
            endDate:1,
            reason:1,
            status:1,
            createdAt:1,
            name: { $arrayElemAt: ["$Emp_Details.fullname", 0] },
            emp_id:{$arrayElemAt:['$Emp_Details.emp_id',0]}
        }
    }
  ]);
  if (!leave) {
    throw new ApiError(200, "NO leaves found");
  }
  res.status(200).json(new ApiResponse(200, "found", leave));
});

const changeStatus = asyncHandler(async (req, res) => {
  const id = req.params;
  const { status } = req.body;
  const leave = await Leave.findById({ _id: id });
  if (!leave) {
    throw new ApiError(400, "no leave found");
  }
  const changed = await Leave.findByIdAndDelete(
    { _id: id },
    { $set: { status } },
    { new: true }
  );
  if (!changed) {
    throw new ApiError(400, "failed to update status");
  }
  return res.status(200).json(new ApiResponse(200, "changed status", changed));
});

export { applyLeave, getLeave, changeStatus, getAllLeave };
