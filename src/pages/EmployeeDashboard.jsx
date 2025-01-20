import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Calendar, DollarSign } from "lucide-react";
import Salaryinfo from "../components/EmpDashboard/Salaryinfo";
import Leave from "../components/EmpDashboard/Leave";
import EmpDetails from "../components/EmpDashboard/EmpDetails";

const EmployeeDashboard = () => {
  return (
    <>
      <div>
        {" "}
        <div className="bg-green-800 h-20 text-gray-300 flex items-center justify-between px-8 -ml-5">
          <div>
            <h1 className="md:text-3xl font-extrabold text-white flex text-xl ">
              Employee<div className="text-yellow-500"> Dashboard</div>
            </h1>
            <p className="text-sm mt-1 text-white opacity-80 italic">
              Manage and monitor employee activities and reports
            </p>
          </div>
          <div className="ml-2">
            <div className="text-right w-32">
              <p className="md:text-lg font-semibold text-white flex  ">
                Welcome, <p className="text-yellow-300">Ashim</p>
              </p>
              <p className="text-sm text-white opacity-80">
                Role: Administrator
              </p>
              <p className="text-sm text-white opacity-80 w-36 -ml-5">
                Last Login: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-teal-50 h-screen ">
        <Tabs defaultValue="details" className="space-y-4">
          <TabsList className="bg-teal-100 rounded-t-lg flex justify-around sm:justify-start w-4/12">
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-teal-200 flex items-center space-x-2 px-2 py-2 rounded-md transition-colors duration-300"
            >
              <User className="w-4 h-5 text-teal-600" />
              <span className="hidden sm:inline">Employee Details</span>
            </TabsTrigger>
            <TabsTrigger
              value="leave"
              className="data-[state=active]:bg-teal-200 flex items-center space-x-2 px-2 py-2 rounded-md transition-colors duration-300"
            >
              <Calendar className="w-4 h-5 text-teal-600" />
              <span className="hidden sm:inline">Leave Applications</span>
            </TabsTrigger>
            <TabsTrigger
              value="salary"
              className="data-[state=active]:bg-teal-200 flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300"
            >
              <DollarSign className="w-4 h-5 text-teal-600" />
              <span className="hidden sm:inline">Salary Information</span>
            </TabsTrigger>
          </TabsList> 

          <TabsContent value="details">
            <Card className="shadow-lg bg-gray-100 mt-10">
              <CardHeader>
                <CardTitle className="text-teal-700 text-center">
                  Employee Details
                  
                </CardTitle>
                <CardDescription className="text-center italic">
                  View and manage your personal information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <EmpDetails />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-teal-700">
                  Leave Applications
                </CardTitle>
                <CardDescription>
                  Manage your leave requests and submit new applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Leave />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="salary">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-teal-700">
                  Salary Information
                </CardTitle>
                <CardDescription>
                  View your salary details and payment history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Salaryinfo />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default EmployeeDashboard;
