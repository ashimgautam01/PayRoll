import Employee from "../models/employees.Model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

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
  const company=req.params.id
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
    dob,
    maritalStatus,
    phone,
    education,
    joined,
    gender,
    emergencyContact: { ename, ephone },
  });

  let emp=await Employee.findById(employee._id)
  const {emp_id,password}=await emp.generateEmployeeID()
  emp.emp_id=emp_id
  emp.password=password
  await emp.save()
  res
    .status(200)
    .json(new ApiResponse(200, "Employee created successfully", emp));
});

export { registerEmployee };
