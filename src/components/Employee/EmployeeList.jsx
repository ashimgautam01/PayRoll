import React, { useEffect, useState } from "react";
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
import employeeServices from "../../services/employees.services";
import { useSelector } from "react-redux";

const EmployeeList = ({ searchTerm }) => {
  const [viewModel, setViewModel] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();
  const [employees, setEmployees] = useState([]);

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

  const company_id=useSelector((state)=>state.company.data.company_id)
  useEffect(()=>{
    const fetchEmployees=async()=>{
      const response=await employeeServices.getEmployees({company_id})
      console.log(response.data);
      setEmployees(response.data)
    }
    fetchEmployees()
  },[])

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
          {employees.map((employee, index) => (
            <TableRow key={employee.id} className="hover:bg-teal-100">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{employee.emp_id}</TableCell>
              <TableCell>
                <img
                  src={employee.profile || "/default-avatar.png"}
                  alt={employee.fullname}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </TableCell>
              <TableCell>{employee.fullname}</TableCell>
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
