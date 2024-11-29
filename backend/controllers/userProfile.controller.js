import mongoose from "mongoose";
import UserProfile from "../models/userProfile.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/AsyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import User from "../models/userModel.js";

const addProfile = asyncHandler(async (req, res) => {
  const { phone, gender, address, role, bio } = req.body;
  if (!(phone || gender || address || role)) {
    throw new ApiError(400, "All fields are required");
  }
  const filepath = req.files?.profile?.[0].path;
  const profile = await uploadOnCloudinary(filepath);
  if (!profile) {
    throw new ApiError(500, "profile not uploaded");
  }
  const existingProfile = await UserProfile.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(req.user._id),
      },
    },
  ]);
  console.log(existingProfile);
  if (existingProfile.length > 0) {
    throw new ApiError(400, "Profile is already created");
  }
  const newprofile = await UserProfile.create({
    user: req.user._id,
    phone,
    gender,
    profile: profile.secure_url,
    address,
    role,
    bio,
  });
  res
    .status(200)
    .json(new ApiResponse(200, "profile created successfully", newprofile));
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(req.user._id) },
    },
    {
      $lookup: {
        from: "userprofiles",
        localField: "_id",
        foreignField: "user",
        as: "User_Profile",
      },
    },
    {
      $project: {
        User_Profile: 1,
        fullName: 1,
        email: 1,
      },
    },
  ]);
  if (user.length < 0) {
    throw new ApiError(400, "User profile donot exists");
  }
  res.status(200).json(new ApiResponse(200, "User profile", user));
});

export { addProfile, getUserProfile };
