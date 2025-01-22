import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import { ChevronUp, ChevronDown, Eye } from "lucide-react";
import salaryServices from "../services/salaryservice";
import AdminSidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
const Salary = () => {
  const [employees, setEmployees] = useState([]);
  const [dialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [updateModal, setUpdateModal] = useState(false);
  const [modalId, setmodalId] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const company = sessionStorage.getItem("company");
  const id = JSON.parse(company)?.company_id;
  const getAllSalary = async () => {
    try {
      const response = await salaryServices.getAllSalary(id);
      setEmployees(response);
    } catch (error) {
      console.error("Error fetching employees:", error);
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
    return selectedEmployee.find(
      (s) => s.month?.toLowerCase() === selectedMonth.toLowerCase()
    );
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedEmployees = [...employees]?.sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (sortDirection === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const filteredEmployees = sortedEmployees.filter(
    (employee) =>
      employee.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.emp_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const update = (id) => {
    setmodalId(id);
    setUpdateModal(true);
  };

  const handleUpdateSalary = async (data) => {
    try {
      const response = await salaryServices.addSalary({ id: modalId, data });
      setUpdateModal(false);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  const getDaysDifference = (employee) => {
    if (!employee?.Salary || employee.Salary.length === 0) {
      return 31;
    }

    const currentDate = new Date();
    const lastSalary = employee.Salary[employee.Salary.length - 1];
    const salaryDate = new Date(lastSalary.payDate);

    const diffTime = Math.abs(currentDate - salaryDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />

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
              <tr className="bg-teal-100">
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => handleSort("fullname")}
                >
                  Full Name
                  {sortColumn === "fullname" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </th>
                <th
                  className="border p-2 cursor-pointer"
                  onClick={() => handleSort("emp_id")}
                >
                  Employee ID
                  {sortColumn === "emp_id" &&
                    (sortDirection === "asc" ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
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
                    <div className="flex gap-5 justify-center">
                      <Button
                        onClick={() => handleViewSalary(employee.Salary)}
                        className="bg-teal-800 text-white px-4 py-1 rounded hover:bg-teal-600 "
                      >
                        <div className="flex gap-2">
                          {" "}
                          <Eye className="h-5 w-5" />
                          View
                        </div>
                      </Button>
                      {getDaysDifference(employee) >30 ? (
                        <Button
                          onClick={() => update(employee._id)}
                          className="bg-blue-600 hover:bg-blue-800"
                        >
                          Update
                        </Button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {dialogOpen && (
            <Dialog
              open={dialogOpen}
              onOpenChange={() => setIsDialogOpen(false)}
            >
              <DialogContent className="w-full max-w-md rounded bg-white p-6">
                <DialogTitle className="text-lg font-medium mb-4">
                  Salary Details - {selectedEmployee?.fullname}
                </DialogTitle>

                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full border p-2 rounded mb-4"
                >
                  <option value="">Select Month</option>
                  {months.map((month) => (
                    <option
                      className="bg-teal-100 hover:bg-teal-600"
                      key={month}
                      value={month.toLowerCase()}
                    >
                      {month}
                    </option>
                  ))}
                </select>

                {selectedMonth && getSalaryForMonth() ? (
                  <div className="space-y-2">
                    <div className="border-t pt-2">
                      <p className="text-blue-600">Basic Salary: Rs .{getSalaryForMonth().salary}</p>
                      <p>Allowance: Rs .{getSalaryForMonth().allowance}</p>
                      <p className="text-green-800">Bonus: Rs .{getSalaryForMonth().bonus}</p>
                      <p className="text-red-600">
                        Deduction: Rs .
                        {Array.isArray(getSalaryForMonth().deduction)
                          ? getSalaryForMonth().deduction[0]?.amount
                          : getSalaryForMonth().deduction}
                      </p>
                      <p className="font-bold mt-2 text-green-500">
                        Total: Rs .
                        {getSalaryForMonth().salary +
                          getSalaryForMonth().allowance +
                          getSalaryForMonth().bonus -
                          (Array.isArray(getSalaryForMonth().deduction)
                            ? getSalaryForMonth().deduction[0]?.amount
                            : getSalaryForMonth().deduction)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-gray-500">
                    No salary data found for selected month
                  </p>
                )}

                <Button
                  onClick={() => setIsDialogOpen(false)}
                  className="mt-4 bg-teal-700 text-white px-4 py-2 rounded w-full"
                >
                  Close
                </Button>
              </DialogContent>
            </Dialog>
          )}

          {updateModal && (
            <Dialog
              open={updateModal}
              onOpenChange={() => setUpdateModal(false)}
              className="relative z-50"
            >
              <DialogContent className="max-w-md">
                <DialogTitle className="text-lg font-bold mb-4">
                  Update Salary
                </DialogTitle>

                <form
                  onSubmit={handleSubmit(handleUpdateSalary)}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Month</label>
                    <select
                      className="w-full p-2 border rounded"
                      {...register("month", { required: true })}
                      onChange={(e) => {
                        register("month").onChange(e);
                        setSelectedMonth(e.target.value);
                      }}
                      required
                    >
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month} value={month.toLowerCase()}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Basic Salary
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      {...register("salary")}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Allowance
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      {...register("allowance")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Bonus</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      {...register("bonus")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Deduction Amount
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      {...register("amount")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Deduction Reason
                    </label>
                    <textarea
                      className="w-full p-2 border rounded"
                      {...register("reason")}
                    />
                  </div>

                  <div className="flex justify-end space-x-3 mt-6">
                    <Button
                      type="button"
                      className="bg-red-500 "
                      onClick={() => setUpdateModal(false)}
                    >
                      Cancel
                    </Button>

                    <Button type="submit" className="bg-teal-700">
                      Update Salary
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Salary;
