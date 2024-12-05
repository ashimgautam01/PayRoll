import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import employeeServices from "../../services/employees.services";
import { useSelector } from "react-redux";

const AddEmployee = () => {
  const [model,Setmodel]=useState(false)
  const {register,handleSubmit}=useForm()
  
  const company=sessionStorage.getItem("company")
  const emp=JSON.parse(company)
  const company_id=emp.company_id
  const addEmployee =async (data) => {
  
   const response=await employeeServices.addEmployee({company_id,data})
   console.log(response);
   Setmodel(false)
   
  };
  return (
    <div>
  <Dialog  open={model} onOpenChange={Setmodel} >
  <DialogTrigger asChild>
    <Button className="bg-teal-500 hover:bg-teal-600 text-white transition-all ease-in-out"
    onclick={()=>Setmodel(true)}
    >
      <UserPlus className="h-4 w-4 mr-2" />
      Add Employee
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[800px] bg-teal-50">
    <DialogHeader>
      <DialogTitle className="text-teal-900 font-bold">Add New Employee</DialogTitle>
      <DialogDescription className="italic text-teal-800">
        Fill in the details of the new employee.
      </DialogDescription>
    </DialogHeader>
    <form onSubmit={handleSubmit(addEmployee)}>
    <div className="grid grid-cols-2 gap-6 py-4">
      
      <div className="col-span-2 flex justify-center">
        <div>
          <Label htmlFor="photo" className="block text-center text-teal-900">
            Photo
          </Label>
          <Input
            id="photo"
            type="file"
            {...register("profile")}
            className="mt-2 border-teal-500 text-teal-900"
            required
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="name" className="w-32 text-right text-teal-900">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Enter full name"
           {...register("fullname")}
            className="flex-1 border-teal-500"
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="email" className="w-32 text-right text-teal-900">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            {...register("email")}
            className="flex-1 border-teal-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="department" className="w-32 text-right text-teal-900">
            Department
          </Label>
          <Input
            id="department"
            placeholder="Enter department"
            {...register("department")}
            className="flex-1 border-teal-500"
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="address" className="w-32 text-right text-teal-900">
            Address
          </Label>
          <Input
            id="address"
            placeholder="Enter address"
            {...register("address")}
            className="flex-1 border-teal-500"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <Label htmlFor="dob" className="w-32 text-right text-teal-900">
            Date of Birth
          </Label>
          <Input
            id="dob"
            type="date"
            {...register("dob")}
            className="flex-1 border-teal-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="education" className="w-32 text-right text-teal-900">
            Education
          </Label>
          <Input
            id="education"
            type="text"
            {...register("education")}
            className="flex-1 border-teal-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="dob" className="w-32 text-right text-teal-900">
            Date of Joined
          </Label>
          <Input
            id="joined"
            type="date"
            {...register("joined")}
            className="flex-1 border-teal-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="gender" className="w-32 text-right text-teal-900">
            Gender
          </Label>
          <select
            id="gender"
            {...register("gender")}
            className="flex-1 border rounded px-2 py-1 border-teal-500"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="maritalStatus" className="w-32 text-right text-teal-900">
            Marital Status
          </Label>
          <select
            id="maritalStatus"
            {...register("maritalStatus")}
            className="flex-1 border rounded px-2 py-1 border-teal-500"
            required
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
      </div>
    </div>

    <div className="grid gap-4 pt-4">
      <DialogHeader>
        <DialogTitle className="text-teal-900">Emergency Contact</DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
          <Label htmlFor="ename" className="w-32 text-right text-teal-900">
            Contact Name
          </Label>
          <Input
            id="ename"
            placeholder="Enter contact name"
            {...register("ename")}
            className="flex-1 border-teal-500"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Label htmlFor="ephone" className="w-32 text-right text-teal-900">
            Contact Phone
          </Label>
          <Input
            id="ephone"
            type="tel"
            placeholder="Enter contact phone"
            {...register("ephone")}
            className="flex-1 border-teal-500"
          />
        </div>
      </div>
    </div>
    <DialogFooter>
      <Button
        type="submit"
        className="bg-teal-500 hover:bg-teal-600 text-white mt-5"
      >
        Add Employee
      </Button>
    </DialogFooter>
    </form>
  </DialogContent>
</Dialog>



    </div>
  );
};

export default AddEmployee;
