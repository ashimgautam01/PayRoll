import Company from "../models/company.Model.js";
import asyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import mongoose from "mongoose";

const createCompany = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    website,
    industry,
    employees,
    bio,
    phone,
    establishedDate,
    revenue,
    growth,
    customers,
    branches,
  } = req.body;
  const existingCompany = await Company.aggregate[
    {
      $match: {
        email: email,
      },
    }
  ];
  if (existingCompany) {
    throw new ApiError(400, "Company already exists");
  }
  const company = await Company.create({
    user:req.user._id,
    name,
    email,
    website,
    industry,
    employees,
    bio,
    phone,
    establishedDate,
    metrics: [{revenue, growth, customers, branches}],
  });
  if (!company) {
    throw new ApiError(400, "Failed to create company");
  }
  res
    .status(200)
    .json(new ApiResponse(200, "company created successfully", company));
});

const getUserCompany=asyncHandler(async(req,res)=>{
    const company=await Company.aggregate([
      {
        $match:{user:new mongoose.Types.ObjectId(req.user._id)}
      }
    ])
    if(company.length<0){
        throw new ApiError(400,"NO company found")
    }
    res.status(200).json(
        new ApiResponse(
            200,
            "Company found",
            company
        )
    )
})



export { createCompany,getUserCompany };
