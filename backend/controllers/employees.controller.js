import mongoose from "mongoose";
import Employee from "../models/employees.Model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { sendEmail } from "../utils/Email.js";
import { generateEmployeeRegistration } from "../Emails/employee.js";

const registerEmployee = asyncHandler(async (req, res) => {
  const {
    fullname,
    email,
    department,
    address,
    dob,
    maritalStatus,
    phone,
    education,
    joined,
    gender,
    ename,
    ephone,
  } = req.body;
  const company = req.params.id;
  const existingEmployee = await Employee.findOne({ email: email });
  if (existingEmployee) {
    throw new ApiError(400, "employee already exists");
  }
  const profilepath = req.files?.profile?.[0].path;
  if (!profilepath) {
    throw new ApiError(401, "invalid file path");
  }
  const profile = await uploadOnCloudinary(profilepath);
  if (!profile) {
    throw new ApiError(402, "Failed to uplod on profile");
  }
  const employee = await Employee.create({
    company,
    fullname,
    email,
    profile: profile.url,
    department,
    address,
    phone:cdphone[0],
    dob,
    maritalStatus,
    education,
    joined,
    gender,
    emergencyContact: { ename, ephone },
  });
  let emp = await Employee.findById(employee._id);
  const { emp_id,emp_pass } = await emp.generateEmployeeID();
  emp.emp_id = emp_id;
  emp.password = emp_pass;
  const html = generateEmployeeRegistration(
    "Our Company", fullname, email, department, address, dob, maritalStatus, phone, education, joined, emp_id, emp.password
  );
  const sendingEmail=await sendEmail(email,"Employee Registration",html)
  await emp.save();
  res
    .status(200)
    .json(new ApiResponse(200, "Employee created successfully", emp));
});

const employeeLogin = asyncHandler(async (req, res) => {
  const { emp_id, password } = req.body;
  if (!(emp_id || password)) {
    throw new ApiError(401,"All fields are required")
  }
  const employee=await Employee.findOne({emp_id})
  if(!employee){
    throw new ApiError(400, "Invalid credentials");
  }
    const checkedPassword=await employee.checkPassword(password)
    if(!checkedPassword){
      throw new ApiError(400,"invalid credentials")
    }
  res.status(200).json(
    new ApiResponse(
      200,
      "employee Login SuccessFull",
      employee
    )
  )

});

const getEmployeeDetails = asyncHandler(async (req, res) => {
  const company = req.params.id;
  const employee = await Employee.aggregate([
    {
      $match: { company: new mongoose.Types.ObjectId(company) },
    },
  ]);
  if (employee.length < 0) {
    throw new ApiError(400, "No employee found");
  }
  res.status(200).json(new ApiResponse(200, "employees found", employee));
});

const getSingle = asyncHandler(async (req, res) => {
  const emp_id = req.params.id;
  console.log(emp_id);
  const user = await Employee.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(emp_id) },
    },
  ]);
  res.json(user);
});

const editEmployee = asyncHandler(async (req, res) => {
  const {
    fullname,
    email,
    department,
    address,
    dob,
    maritalStatus,
    phone,
    education,
    joined,
    gender,
    ename,
    ephone,
  } = req.body;
  const userid = req.params?.id;
  const employee = await Employee.findOne({ _id: userid });
  if (!employee) {
    throw new ApiError(400, "NO user found");
  }
  const updatedEmployee = await Employee.findOneAndUpdate(
    { _id: userid },
    {
      $set: { fullname },
    }
  );
});

export { registerEmployee, getEmployeeDetails, getSingle ,employeeLogin};
