import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AdminHeader from '../components/AdminHeader';
import AdminSidebar from '../components/Sidebar';
import { useForm } from 'react-hook-form';
import companyService from '../services/companyServices';

const Setting = () => {
  const [month, setmonth] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const company = sessionStorage.getItem("company");
  const id = JSON.parse(company)?.company_id;
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const submitMonthly = async (data) => {
    try {
      const newData={company_id:id,month,...data}
      const response=await companyService.updateMonthlyData({newData})
      if(response){
        alert("updated successfully")
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset()
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className='flex'>
        <AdminSidebar />
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 p-6 w-full">
          <Card className="max-w-md mx-auto bg-white/80 backdrop-blur shadow-xl">
            <CardHeader className="text-center border-b bg-gradient-to-r from-teal-600 to-teal-700">
              <CardTitle className="text-2xl font-bold text-white">
                Monthly Data Entry
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label className="text-lg font-semibold text-gray-700">Select Month</Label>
                <Select onValueChange={setmonth} value={month}>
                  <SelectTrigger className="w-full bg-white border-2 border-teal-100 focus:border-teal-500 transition-colors">
                    <SelectValue placeholder="Choose a month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month.toLowerCase()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {month && (
                <form onSubmit={handleSubmit(submitMonthly)} className="space-y-4 animate-fadeIn">
                  <div className="space-y-2">
                    <Label className="text-gray-700">Monthly Revenue (Rs)</Label>
                    <Input
                      type="number"
                      placeholder="Enter revenue amount"
                      className="bg-white border-2 border-teal-100 focus:border-teal-500 transition-colors"
                      {...register('revenue', { 
                        required: "Revenue is required",
                        min: { value: 0, message: "Revenue cannot be negative" }
                      })}
                    />
                    {errors.revenue && (
                      <span className="text-red-500 text-sm">{errors.revenue.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700">Monthly Expense (Rs)</Label>
                    <Input
                      type="number"
                      placeholder="Enter expense amount"
                      className="bg-white border-2 border-teal-100 focus:border-teal-500 transition-colors"
                      {...register('expense', { 
                        required: "Expense is required",
                        min: { value: 0, message: "Expense cannot be negative" }
                      })}
                    />
                    {errors.expense && (
                      <span className="text-red-500 text-sm">{errors.expense.message}</span>
                    )}
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 
                    hover:to-teal-800 text-white font-semibold py-2 px-4 rounded-lg 
                    transform transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? 'Updating...' : `Update ${month.charAt(0).toUpperCase() + month.slice(1)} Data`}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Setting;