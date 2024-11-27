import mongoose, { Schema } from "mongoose";

const userProfileSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profile: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    address: {
      type: String,
      trim: true,
    },
    metro: {
      type: String,
      trim: true,
    },
    issues: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Issue",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
