import AdminSidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import { Users, UserPlus, Edit, Trash2, Search, Eye } from "lucide-react";
import AddEmployee from "../components/Employee/AddEmployee";
import EmployeeList from "../components/Employee/EmployeeList";

const initialEmployees = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      department: "Engineering",
      profileImage: "/placeholder.svg?height=80&width=80",
      empId: "EMP001",
      salary: 75000,
      joinedDate: "2020-03-15",
      dob: "1985-07-22",
      maritalStatus: "Married",
      salaryUpdateDate: "2023-01-01",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, Anytown, AN 12345",
      education: "B.S. in Computer Science",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      department: "Marketing",
      profileImage: "/placeholder.svg?height=80&width=80",
      empId: "EMP002",
      salary: 70000,
      joinedDate: "2019-11-01",
      dob: "1990-03-15",
      maritalStatus: "Single",
      salaryUpdateDate: "2023-01-01",
      phone: "+1 (555) 987-6543",
      address: "456 Elm St, Othertown, OT 67890",
      education: "M.A. in Marketing",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      department: "HR",
      profileImage: "/placeholder.svg?height=80&width=80",
      empId: "EMP003",
      salary: 65000,
      joinedDate: "2021-06-01",
      dob: "1988-11-30",
      maritalStatus: "Divorced",
      salaryUpdateDate: "2023-01-01",
      phone: "+1 (555) 246-8135",
      address: "789 Oak St, Somewhere, SW 13579",
      education: "B.A. in Human Resources",
    },
  ]
const Employee = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchTerm, setSearchTerm] = useState("");

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
            <EmployeeList searchTerm={searchTerm}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
