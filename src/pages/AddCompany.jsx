import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, User, Mail, Globe, Briefcase, DollarSign, Users, MapPin, ChartNoAxesCombined, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import companyService from "../services/companyServices";
const AddCompany = () => {
    const {register,handleSubmit}=useForm()
    const [loading,SetLoading]=useState(false)
    const create=async(data)=>{
        SetLoading(true)
       const response=await companyService.registerCompany({data})
       console.log(response);
        SetLoading(false)
    }

  return (
    <div>
      <Navbar />
      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block p-8 text-gray-800">
            <h2 className="text-4xl font-bold mb-4">Add Your Company</h2>
            <p className="text-lg mb-6">
              Register your company to unlock growth opportunities. Fill in the necessary details to maintain accurate
              records and promote collaboration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Globe className="text-white bg-teal-700 rounded-full p-2 w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Global Presence</h3>
                  <p>Highlight your company's global reach and impact, and connect with international clients.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Briefcase className="text-white bg-teal-700 rounded-full p-2 w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Industry Leader</h3>
                  <p>Showcase your expertise, domain knowledge, and position in the industry.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="text-white bg-teal-700 rounded-full p-2 w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">People First</h3>
                  <p>Emphasize your focus on employee well-being and customer satisfaction.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <DollarSign className="text-white bg-teal-700 rounded-full p-2 w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Sustainable Growth</h3>
                  <p>Outline your company's trajectory and plans for future growth and development.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-white bg-teal-700 rounded-full p-2 w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Strategic Locations</h3>
                  <p>Provide an overview of your branches and their importance in business operations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details  */}

          <div className="p-8 bg-teal-50 ">
            <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">Add Company Information</h1>
            <form className="space-y-6" onSubmit={handleSubmit(create)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Name</label>
                  <div className="flex items-center space-x-4">
                    <User className="text-teal-600" />
                    <Input type="text" placeholder="Enter company name" className="w-full"
                    {...register("name")}
                    required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Email</label>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-teal-600" />
                    <Input type="email" placeholder="Enter email address" className="w-full"
                    {...register("email")}
                    required
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Website</label>
                  <div className="flex items-center space-x-4">
                    <Globe className="text-teal-600" />
                    <Input type="url" placeholder="Enter website URL" className="w-full" 
                    {...register("website")}
                    required/>
                  </div>
                </div>
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Industry</label>
                  <div className="flex items-center space-x-4">
                    <Briefcase className="text-teal-600" />
                    <Input type="text" placeholder="Enter industry" className="w-full"
                    {...register("industry")}
                    required />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Number of Employees</label>
                  <div className="flex items-center space-x-4">
                    <Users className="text-teal-600" />
                    <Input type="number" placeholder="Enter number of employees" className="w-full"
                    {...register("employees")}
                    required />
                  </div>
                </div>
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Phone</label>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-teal-600" />
                    <Input type="tel" placeholder="Enter phone number" className="w-full"
                    {...register("phone")}
                    required
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Established Date</label>
                  <div className="flex items-center space-x-4">
                    <Calendar className="text-teal-600" />
                    <Input type="date" className="w-full" 
                    {...register("establishedDate")}
                    required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Annual Revenue</label>
                  <div className="flex items-center space-x-4">
                    <DollarSign className="text-teal-600" />
                    <Input type="number" placeholder="Enter revenueg in format eg: 1 million USD" className="w-full" 
                    {...register("revenue")}
                    required
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Growth</label>
                <div className="flex items-center space-x-4">
                <ChartNoAxesCombined className="text-teal-600"/>
                  <Input type="number" placeholder="Enter growth percentage" className="w-full" 
                  {...register("growth")}
                  required
                  />
                </div>
                </div>
                <div>
                  <label className="block text-teal-700 font-medium mb-1">Number of Customers</label>
                  <div className="flex items-center space-x-4">
                   <Users className="text-teal-600"/> 
                  <Input type="number" placeholder="Enter number of customers" className="w-full"
                  {...register("customers")}
                  required
                  />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-teal-700 font-medium mb-1">Branches</label>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-teal-600" />
                  <Input type="number" placeholder="Enter branches location" className="w-full"
                  {...register("branches")}
                  required
                  />
                </div>
              </div>
              <div>
                <label className="block text-teal-700 font-medium mb-1">Company Bio</label>
                <Textarea placeholder="Write a brief bio about the company" className="w-full" 
                {...register("bio")}
                required
                />
              </div>
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
               {loading? <Loader className="animate-spin"/>:<></>} Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
