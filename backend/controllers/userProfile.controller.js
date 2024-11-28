import mongoose from "mongoose";
import UserProfile from "../models/userProfile.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const addProfile=asyncHandler(async(req,res)=>{
    const { phone,gender,address,role,bio}=req.body

    if(!(  phone || gender  ||address  || role)){
        throw  new ApiError(400,"All fields are required")
    }
    const filepath=req.files?.profile?.[0].path
    const profile=await uploadOnCloudinary(filepath)
    if(!profile){
        throw new ApiError(500,"profile not uploaded")
    }
    const existingProfile=await UserProfile.aggregate([
        {
            $match:{
                user:new mongoose.Types.ObjectId(req.user._id)
            }
        }
    ])
    console.log(existingProfile);
    if(existingProfile){
        throw new ApiError(400,"Profile is already created")
    }
    const newprofile=await UserProfile.create({
        user:req.user._id,
        phone,
        gender,
        profile:profile.secure_url,
        address,
        role,
        bio
    })
    console.log(newprofile);
    res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "profile created successfully",
            newprofile
        )
    )
})


export {addProfile}