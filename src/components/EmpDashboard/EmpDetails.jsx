import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Building2, CalendarDays, UserCircle2 } from 'lucide-react';
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import employeeServices from "../../services/employees.services";
import { useSelector } from "react-redux";

// Sample data (you may want to replace this with the real data from API)
const employeeData = {
  name: "John Doe",
  email: "john.doe@example.com",
  department: "Engineering",
  position: "Senior Software Engineer",
  joinDate: "2020-01-15",
  manager: "Jane Smith",
};

const EmpDetails = () => {
  const [openModel, setModel] = useState(false);
  const [loading, setLoading] = useState(true); // Initially set loading to true
  const [employee, setEmployee] = useState(null); // Holds employee data

  const employeeId = useSelector((state) => state.auth.data.id); // Get employee id from redux store

  // Fetch employee details from API
  const getEmployeeDetails = async () => {
    try {
      const response = await employeeServices.getSingleEmployee({ employeeId });
      setEmployee(response.data); // Assuming the API returns data in response.data
    } catch (error) {
      console.error("Failed to fetch employee details:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched or failed
    }
  };

  // Fetch employee details when component mounts
  useEffect(() => {
    if (employeeId) {
      getEmployeeDetails(); // Fetch employee data if employeeId is available
    }
  }, [employeeId]);

  if (loading) {
    return <h1>Loading...</h1>; // Show loading message while data is being fetched
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-48">
        {/* Employee Details Section */}
        <div className="flex-shrink-0 text-center">
          <Avatar className="w-32 h-32">
            <AvatarImage src={employee?.avatar || "/placeholder-avatar.jpg"} alt={employee?.name} />
            <AvatarFallback>{employee?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow">
          <div className="space-y-4">
            <div className="flex justify-end -mr-20 sm:mr-10">
              <Button
                className="bg-teal-700 hover:scale-105 hover:bg-teal-800"
                onClick={() => setModel(true)}
              >
                Edit Profile
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-teal-700">{employee?.name}</h2>
              <p className="text-gray-500">{employee?.position}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>{employee?.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="font-semibold">Department</h3>
                  <p>{employee?.department}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDays className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="font-semibold">Join Date</h3>
                  <p>{employee?.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <UserCircle2 className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="font-semibold">Manager</h3>
                  <p>{employee?.manager}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Dialog open={openModel} onOpenChange={setModel}>
          <DialogContent>
            <DialogTitle>Edit Your Details</DialogTitle>
            <DialogDescription className="text-gray-500 italic">
              You can only change your password. For other details, please consult with HR.
            </DialogDescription>
            <div>
              <Label className="text-teal-800 font-medium">Type new password:</Label>
              <Input
                type="password"
                placeholder="Type new Password"
                className="mt-2 border-teal-800"
              />
            </div>
            <DialogFooter>
              <Button className="bg-teal-700 hover:bg-teal-800">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmpDetails;
