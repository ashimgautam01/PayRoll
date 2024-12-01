import mongoose from "mongoose";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";
import Employee from "../models/employees.Model.js";
import Salary from "../models/salary.Model.js";

const addSalary = asyncHandler(async (req, res) => {
  const { salary, allowance, bonus, deduction } = req.body;
  const employee_id = req.params.id;
  const employee = await Employee.findOne({ _id: employee_id });
  if (!employee) {
    const createdSalary = await Salary.create({
      employee: employee_id,
      salary,
      deduction,
      bonus,
      allowance,
    });
    res
      .status(200)
      .json(new ApiResponse(200, "Salary Added Successfully", createdSalary));
  }
 
  const createdSalary=await Salary.findOneAndUpdate({employee:employee_id},
    {$set:{salary,allowance,bonus,deduction}},
    {new:true}
  )
  if(!createdSalary){
    throw new ApiError(400,"failed to update salary")
  }
  res.status(200).json(
    new ApiResponse(
        200,
        "Salary Updated Successfully",
        createdSalary
    )
  )
});

const getSalary = asyncHandler(async (req, res) => {
  const employee_id = req.params.id;
  const company = await Employee.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(employee_id) },
    },
    {
      $lookup: {
        from: "salaries",
        localField: "_id",
        foreignField: "employee",
        as: "Salary_Info",
      },
    },

    {
      $project: {
        Salary_Info: 1,
        fullname: 1,
        emp_id: 1,
      },
    },
  ]);
  res.json(company);
});

export { addSalary, getSalary };
