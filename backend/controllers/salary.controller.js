import mongoose from "mongoose";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";
import Employee from "../models/employees.Model.js";
import Salary from "../models/salary.Model.js";

const addSalary = asyncHandler(async (req, res) => {
  const { month, salary, allowance, bonus, amount, reason } = req.body;
  const employee_id = req.params.id;
  const employee = await Employee.findOne({ _id: employee_id });

  const createdSalary = await Salary.create({
    employee: employee_id,
    company: employee.company,
    month,
    salary,
    deduction: [{ amount, reason }],
    bonus,
    allowance,
  });
 
  if (!createdSalary) {
    throw new ApiError(400, "failed to update salary");
  }
  res 
    .status(200)
    .json(new ApiResponse(200, "Salary Updated Successfully", createdSalary));
});

const getSingleSalary = asyncHandler(async (req, res) => {
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
  if (!company) {
    throw new ApiError(400, "No salary found");
  }
  res.status(200).json(new ApiResponse(200, "Salary ", company));
});

const getAllEmployeeSalary=asyncHandler(async(req,res)=>{
  const company=req.params.id
  const salary=await Employee.aggregate([
    {
      $match:{company:new mongoose.Types.ObjectId(company)}
    },
    {
      $lookup:{
        from:"salaries",
        localField:"_id",
        foreignField:"employee",
        as:"Salary"
      }
    },
    {
      $project:{
        emp_id:1,
        fullname:1,
        Salary:1
      }
    }
  ])
  res.json(salary)
})


export { addSalary, getSingleSalary,getAllEmployeeSalary };
