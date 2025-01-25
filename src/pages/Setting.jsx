import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Setting = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [formData, setFormData] = useState({
    salary: "",
    salesEmployees: ""
  });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-gray-100 p-6">
        
      <Card className="max-w-md mx-auto bg-white/80 backdrop-blur shadow-xl">
        <CardHeader className="text-center border-b bg-gradient-to-r from-teal-600 to-teal-700">
          <CardTitle className="text-2xl font-bold text-white">
            Monthly Data Entry
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label className="text-lg font-semibold text-gray-700">Select Month</Label>
            <Select onValueChange={setSelectedMonth} value={selectedMonth}>
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

          {selectedMonth && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-2">
                <Label className="text-gray-700">Monthly Salary ($)</Label>
                <Input
                  type="number"
                  placeholder="Enter salary amount"
                  className="bg-white border-2 border-teal-100 focus:border-teal-500 transition-colors"
                  value={formData.salary}
                  onChange={(e) => setFormData({...formData, salary: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700">Number of Sales Employees</Label>
                <Input
                  type="number"
                  placeholder="Enter number of employees"
                  className="bg-white border-2 border-teal-100 focus:border-teal-500 transition-colors"
                  value={formData.salesEmployees}
                  onChange={(e) => setFormData({...formData, salesEmployees: e.target.value})}
                />
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 
                hover:to-teal-800 text-white font-semibold py-2 px-4 rounded-lg 
                transform transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Update {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)} Data
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Setting;

