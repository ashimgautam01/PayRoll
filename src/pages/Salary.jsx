import { useState, useEffect } from 'react';
import { Dialog, DialogTitle } from '@headlessui/react';
import { ChevronUp, ChevronDown, Eye } from 'lucide-react';
import axios from 'axios';
import salaryServices from '../services/salaryservice';
import AdminSidebar from '../components/Sidebar';
import AdminHeader from '../components/AdminHeader';

const Salary = () => {
  const [employees, setEmployees] = useState([]);
  const [dialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  
  const company=sessionStorage.getItem("company")
  const id=JSON.parse(company).company_id
  const getAllSalary = async () => {
    try {
      const resoposne=await salaryServices.getAllSalary(id)
      setEmployees(resoposne)
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    getAllSalary();
  }, []);

  const handleViewSalary = (employee) => {
    setSelectedEmployee(employee);
    setIsDialogOpen(true);
  };

  const getSalaryForMonth = () => {
    if (!selectedEmployee || !selectedMonth) return null;
    console.log( selectedEmployee?.Salary[0]);
    return selectedEmployee.Salary.find(s => s.month?.toLowerCase() === selectedMonth.toLowerCase());
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const filteredEmployees = sortedEmployees.filter(employee =>
    employee.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.emp_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
   <div>
    <AdminHeader/>
    <div className='flex'>  
    <AdminSidebar/>
    
     <div className="flex-1 p-8">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Employee Salaries</h1>
        <input
          type="text"
          placeholder="Search employees..."
          className="border p-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className='bg-teal-100'>
            <th 
              className="border p-2 cursor-pointer"
              onClick={() => handleSort('fullname')}
            >
              Full Name
              {sortColumn === 'fullname' && (
                sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              )}
            </th>
            <th 
              className="border p-2 cursor-pointer"
              onClick={() => handleSort('emp_id')}
            >
              Employee ID
              {sortColumn === 'emp_id' && (
                sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              )}
            </th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee._id}>
              <td className="border p-2">{employee.fullname}</td>
              <td className="border p-2">{employee.emp_id}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleViewSalary(employee)}
                  className="bg-teal-800 text-white px-4 py-1 rounded hover:bg-teal-600"
                >
                 <div className='flex gap-2'> <Eye className='h-5 w-5'/>View 
                 </div>
                 </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {dialogOpen && (
        <Dialog
          open={dialogOpen}
          onClose={() => setIsDialogOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md rounded bg-white p-6">
              <Dialog.Title className="text-lg font-medium mb-4">
                Salary Details - {selectedEmployee?.fullname}
              </Dialog.Title>

              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full border p-2 rounded mb-4"
              >
                <option value="">Select Month</option>
                {months.map(month => (
                  <option  className='bg-teal-100 hover:bg-teal-600' key={month} value={month.toLowerCase()}>{month}</option>
                ))}
              </select>

              {selectedMonth && getSalaryForMonth() ? (
                <div className="space-y-2">
                  <div className="border-t pt-2">
                    <p>Basic Salary: ${getSalaryForMonth().salary}</p>
                    <p>Allowance: ${getSalaryForMonth().allowance}</p>
                    <p>Bonus: ${getSalaryForMonth().bonus}</p>
                    <p>Deduction: ${Array.isArray(getSalaryForMonth().deduction) 
                      ? getSalaryForMonth().deduction[0]?.amount 
                      : getSalaryForMonth().deduction}</p>
                    <p className="font-bold mt-2">
                      Total: ${getSalaryForMonth().salary + 
                        getSalaryForMonth().allowance + 
                        getSalaryForMonth().bonus -
                        (Array.isArray(getSalaryForMonth().deduction) 
                          ? getSalaryForMonth().deduction[0]?.amount 
                          : getSalaryForMonth().deduction)}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500">No salary data found for selected month</p>
              )}


              <button
                onClick={() => setIsDialogOpen(false)}
                className="mt-4 bg-teal-700 text-white px-4 py-2 rounded w-full"
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
   </div>
   </div>
  );
};

export default Salary;