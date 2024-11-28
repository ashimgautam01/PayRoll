import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Edit, Eye, Trash2 } from "lucide-react";
import EmployeeCard from "./EmployeeCard";

const initialEmployees = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    profileImage: "https://img.freepik.com/free-photo/young-attractive-guy_144627-5969.jpg?t=st=1732800173~exp=1732803773~hmac=942e1cd96f8237fdb56cd1bdc9807b1b1eea1e78ff70d82728350c4033569590&w=1060",
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
];

const EmployeeList = ({ searchTerm }) => {
  const [viewModel, setViewModel] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(initialEmployees);
  const [employees, setEmployees] = useState(initialEmployees);
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setViewModel(true);
  };

  const closeModal = () => {
    setViewModel(false);
    setSelectedEmployee(null);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Serial No.</TableHead>
            <TableHead>Emp_id</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEmployees.map((employee, index) => (
            <TableRow key={employee.id} className="hover:bg-teal-100">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{employee.empId}</TableCell>
              <TableCell>
                <img
                  src={employee.profileImage || "/default-avatar.png"}
                  alt={employee.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <div className="flex space-x-5">
                  <Button
                    onClick={() => openModal(employee)}
                    variant="outline"
                    size="sm"
                    className="text-teal-600 hover:text-teal-700 transition-all ease-in-out"
                  >
                    View <Eye className="h-4 w-4" />
                    <span className="sr-only">View Salary</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-teal-600 hover:text-teal-700 transition-all ease-in-out"
                  >
                    Edit <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit Details</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="text-red-600 hover:text-red-700 transition-all ease-in-out"
                  >
                    Delete <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <EmployeeCard
        isOpen={viewModel}
        onClose={closeModal}
        employee={selectedEmployee}
      />
    </div>
  );
};

export default EmployeeList;
