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

const updateMonthlyData = asyncHandler(async (req, res) => {
  const { newData } = req.body;

  // Validate required fields
  if (!newData?.company_id || !newData?.month || !newData?.revenue || !newData?.expense) {
    throw new ApiError(400, "All fields (company_id, month, revenue, expense) are required");
  }

  const company = await Company.findById(newData.company_id);
  if (!company) {
    throw new ApiError(404, "Company not found");
  }

  // Ensure month is valid before calling toLowerCase
  const month = newData.month?.toLowerCase();
  if (!month || typeof month !== "string") {
    throw new ApiError(400, "Invalid month value");
  }

  const monthIndex = company.metrics.findIndex(m => m.month === month);

  if (monthIndex > -1) {
    // Update existing month metrics
    company.metrics[monthIndex] = {
      revenue: Number(newData.revenue),
      expense: Number(newData.expense),
      month: month
    };
  } else {
    // Add new month metrics
    company.metrics.push({
      revenue: Number(newData.revenue),
      expense: Number(newData.expense),
      month: month
    });
  }

  await company.save();

  return res.status(200).json(
    new ApiResponse(200, "Metrics updated successfully", company)
  );
});

const getMonthlyData=asyncHandler(async(req,res)=>{
  const {id}=req.params
  const company=await Company.findOne({_id:id}).select("metrics -_id")
  if(!company){
    throw new ApiError(402,"no company found")
  }
  console.log(company);
  return res.status(200).json(
    new ApiResponse(
      200,
      "data loaded",
      company
    )
  )
})

export { createCompany,getUserCompany ,updateMonthlyData,getMonthlyData};
