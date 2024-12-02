import React, { useState } from 'react';
import AdminSidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Edit2,
  Eye,
  Printer,
  Users,
  DollarSign,
  PlusCircle,
  MinusCircle,
  Calendar,
  MonitorPauseIcon,
} from 'lucide-react';

const employees = [
  { id: 1, emp_id: 'EMP001', name: 'John Doe', salary: 50000, allowance: 2000, bonus: 1000, deduction: 500, payDate: '2023-05-15' },
  { id: 2, emp_id: 'EMP002', name: 'Jane Smith', salary: 55000, allowance: 2200, bonus: 1100, deduction: 550, payDate: '2023-05-15' },
  { id: 3, emp_id: 'EMP003', name: 'Bob Johnson', salary: 48000, allowance: 1900, bonus: 950, deduction: 480, payDate: '2023-05-15' },
  { id: 4, emp_id: 'EMP004', name: 'Alice Brown', salary: 52000, allowance: 2100, bonus: 1050, deduction: 520, payDate: '2023-05-15' },
  { id: 5, emp_id: 'EMP005', name: 'Charlie Wilson', salary: 51000, allowance: 2050, bonus: 1020, deduction: 510, payDate: '2023-05-15' },
];

const Salary = () => {
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortColumn) {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredEmployees = sortedEmployees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.emp_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SortIcon = ({ column }) => {
    if (column !== sortColumn) return null;
    return sortDirection === 'asc' ? <ChevronUp className="inline w-4 h-4" /> : <ChevronDown className="inline w-4 h-4" />;
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-full">
        <AdminHeader />
        <div className="container mx-auto px-4 py-8 bg-teal-50 min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-teal-900 flex items-center gap-2">
            <Users className="mr-2" /> Employee Salary Information
          </h1>
          <div className="mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by name or employee ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border rounded-lg border-teal-300 focus:border-teal-500 focus:ring-teal-500 text-sm shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
            </div>
          </div>
          <div className="overflow-x-auto bg-white rounded-lg shadow w-full">
            <Table className="text-center ">
              <TableHeader className="bg-teal-100 ">
                <TableRow>
                  <TableHead className="s" onClick={() => handleSort('s_no')}>
                    S.No <SortIcon column="s_no" />
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('emp_id')}>
                    Emp ID <SortIcon column="emp_id" />
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('name')}>
                    Name <SortIcon column="name" />
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('salary')}>
                    <div className="flex items-center">
                      <DollarSign className="mr-1 h-4 w-4" /> Salary <SortIcon column="salary" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('allowance')}>
                    <div className="flex items-center">
                      <PlusCircle className="mr-1 h-4 w-4" /> Allowance <SortIcon column="allowance" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('bonus')}>
                    <div className="flex items-center">
                      <PlusCircle className="mr-1 h-4 w-4" /> Bonus <SortIcon column="bonus" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('deduction')}>
                    <div className="flex items-center">
                      <MinusCircle className="mr-1 h-4 w-4" /> Deduction <SortIcon column="deduction" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('deduction')}>
                    <div className="flex items-center">
                      <MonitorPauseIcon className="mr-1 h-4 w-4" /> Total <SortIcon column="deduction" />
                    </div>
                  </TableHead>
                  <TableHead className="cursor-pointer text-teal-800" onClick={() => handleSort('payDate')}>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" /> Pay Date <SortIcon column="payDate" />
                    </div>
                  </TableHead>
                  <TableHead className="text-teal-800 text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee, index) => (
                  <TableRow key={employee.id} className="hover:bg-teal-100/50 transition-colors">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{employee.emp_id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell className="font-bold text-yellow-800">{employee.salary.toLocaleString()}</TableCell>
                    <TableCell>{employee.allowance.toLocaleString()}</TableCell>
                    <TableCell>{employee.bonus.toLocaleString()}</TableCell>
                    <TableCell className="text-red-600 font-semibold">{employee.deduction.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className="font-bold text-blue-600">
                        {(employee.salary + employee.allowance + employee.bonus - employee.deduction).toLocaleString()}
                      </span>
                    </TableCell>
                    <TableCell>{employee.payDate}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-teal-600 border-teal-600 hover:bg-teal-200 rounded-md px-3 py-1 text-sm flex items-center gap-1" onClick={() => alert(`Edit ${employee.name}`)}>
                          <Edit2 className="w-4 h-4" /> Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-teal-600 border-teal-600 hover:bg-teal-200 rounded-md px-3 py-1 text-sm flex items-center gap-1" onClick={() => alert(`View details of ${employee.name}`)}>
                          <Eye className="w-4 h-4" /> View
                        </Button>
                        <Button variant="outline" size="sm" className="text-teal-600 border-teal-600 hover:bg-teal-200 rounded-md px-3 py-1 text-sm flex items-center gap-1" onClick={() => alert(`Print payslip for ${employee.name}`)}>
                          <Printer className="w-4 h-4" /> Print
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salary;
