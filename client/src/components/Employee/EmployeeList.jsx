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

const EmployeeList = ( {employees} ) => {
  const [viewModel, setViewModel] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState();

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
        <TableHeader className="bg-teal-100 ">
          <TableRow >
            <TableHead className="text-teal-600 font-semibold">Serial No.</TableHead>
            <TableHead className="text-teal-600 font-semibold">Emp_id</TableHead>
            <TableHead className="text-teal-600 font-semibold">Photo</TableHead>
            <TableHead className="text-teal-600 font-semibold">Name</TableHead>
            <TableHead className="text-teal-600 font-semibold">Email</TableHead>
            <TableHead className="text-teal-600 font-semibold">Department</TableHead>
            <TableHead className="text-teal-600 font-semibold text-center">Actions</TableHead>
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
