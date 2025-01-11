import mongoose, { Schema } from "mongoose";
import crypto from 'crypto'
import bcrypt from 'bcrypt'

const EmployeeSchema = new Schema(
  {
    company:{
        type:mongoose.Types.ObjectId,
        ref:"Company"
    },
    profile:{
        type:String
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); 
        },
        message: "Invalid email format.",
      },
    },
    emp_id: {
      type: String,
      unique: true,
    },
    password:{
        type:String
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    salary: {
      type: Number,
      default: 0,
      min: [0, "Salary cannot be negative"],
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
     
    },
    education: {
      type: String,
      required: true,
      trim: true,
    },
    joined: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["active","on-leave"],
      default: "active", 
    },
    gender: {
      type: String,
    },
    emergencyContact: {
      ename: {
        type: String,
        required: true,
      },
      ephone: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);


EmployeeSchema.pre("save",async function (next){
  if(!this.isModified("password")){
    return next()
  }
  this.password=await bcrypt.hash(this.password,10)
  next();
})

EmployeeSchema.methods.checkPassword=async function(password){
  return bcrypt.compare(password,this.password)
}

EmployeeSchema.methods.generateEmployeeID=function(){
  const emp_id=  crypto.randomBytes(3).toString("hex").toUpperCase();
  const emp_pass=crypto.randomBytes(3).toString("hex").toLocaleLowerCase()
 return {emp_id,emp_pass};
}

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
