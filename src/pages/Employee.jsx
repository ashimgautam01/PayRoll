import AdminSidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";


import { Users, UserPlus, Edit, Trash2, Search, Eye } from "lucide-react";
import AddEmployee from "../components/Employee/AddEmployee";
import EmployeeList from "../components/Employee/EmployeeList";
import employeeServices from "../services/employees.services";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const company=sessionStorage.getItem("company")
  const company_id=JSON.parse(company).company_id
  console.log(company_id);
  useEffect(()=>{
    const fetchEmployees=async()=>{
      const response=await employeeServices.getEmployees({company_id})
      setEmployees(response.data)
    }
    fetchEmployees()
  },[])
  return (
    <div>
      <div className="flex">
        <AdminSidebar />
        <div className="w-full">
          <AdminHeader />
          <div className="container mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-teal-700 flex items-center gap-2">
              <Users className="h-8 w-8" />
              Employee Management
            </h1>

            <div className="flex justify-between items-center">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border-teal-300 focus:border-teal-500 focus:ring-teal-500 transition-all ease-in-out"
                />
              </div>

            <AddEmployee/>
            </div>
            <EmployeeList employees={employees}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
