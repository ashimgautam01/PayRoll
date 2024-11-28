import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\..+$/.test(v);
        },
        message: "Invalid website URL.",
      },
    },
    industry: {
      type: String,
      required: true,
      trim: true,
    },
    employees: {
      type: Number,
      min: 0,
    },
    bio: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    phone: {
      type: String,
      trim: true,
    },
    establishedDate: {
      type: Date,
    },
    metrics: [
      {
        revenue: {
          type: String,
        },
        growth: {
          type: Number,
          min: 0,
        },
        customers: {
          type: Number,
          min: 0,
        },
        branches: {
          type: Number,
          min: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
