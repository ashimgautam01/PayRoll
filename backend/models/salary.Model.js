import mongoose, { Schema } from "mongoose";

const salarySchema = new Schema({
  employee: {
    type: mongoose.Types.ObjectId,
    ref: "Employee",
  },
  company: {
    type: mongoose.Types.ObjectId,
    ref: "Company",
  },
  month: {
    type: String,
  },
  salary: {
    type: Number,
  },
  allowance: {
    type: Number,
  },
  bonus: {
    type: Number,
  },
  deduction: [
    {
      amount: {
        type: Number,
      },
      reason: { type: String },
    },
  ],
  status: {
    type: String,
    enum: ["paid", "Not paid"],
    default: "Not paid",
  },
  payDate: {
    type: Date,
    default: Date.now,
  },
},
{
  timestamps:true 
});


salarySchema.pre('save', function(next) {
  if (this.isNew || this.isModified('payDate')) {
    const date = new Date(this.payDate);
    date.setMonth(date.getMonth() + 1);
    this.nextPayDate = date;
  }
  next();
});


const Salary = mongoose.model("Salary", salarySchema);

export default Salary;
