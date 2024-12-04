import React from "react";
import AdminSidebar from "../components/Sidebar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  BriefcaseBusiness,
  Building2,
  Calendar1,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";
import AdminHeader from "../components/AdminHeader";


const monthlySalaryData = [
    { month: "Jan", salary: 5000, salesEmployees: 4000 },
    { month: "Feb", salary: 5100, salesEmployees: 3900 },
    { month: "Mar", salary: 4800, salesEmployees: 4200 },
    { month: "Apr", salary: 5300, salesEmployees: 4400 },
    { month: "May", salary: 5200, salesEmployees: 4600 },
    { month: "Jun", salary: 5400, salesEmployees: 4700 },
    { month: "Jul", salary: 5500, salesEmployees: 4600 },
    { month: "Aug", salary: 5700, salesEmployees: 4800 },
    { month: "Sep", salary: 5600, salesEmployees: 4900 },
    { month: "Oct", salary: 5800, salesEmployees: 5100 },
    { month: "Nov", salary: 5900, salesEmployees: 5000 },
    { month: "Dec", salary: 6000, salesEmployees: 5200 },
  ];
  
  

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <AdminSidebar />
        <div className="w-full ">
        <AdminHeader/>
          <div className="grid gap-6 md:grid-cols-2 mt-5 m-2">
          <Card>
  <CardHeader>
    <CardTitle className="font-bold text-teal-900">
      Monthly Salary Trend
    </CardTitle>
    <CardDescription className="text-neutral-900 font-sans italic">
      Total monthly salary over time
    </CardDescription>
  </CardHeader>
  <CardContent>
    <ChartContainer
      config={{
        salary: {
          label: "Salary",
          color: "green",
        },
        salesEmployees: {
          label: "Sales Employees",
          color: "blue",
        },
      }}
      className="h-[300px] w-[500px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={monthlySalaryData}>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          
          <Line
            type="monotone"
            dataKey="salary"
            stroke="green"
            strokeWidth={3}
            name="Salary"
          />

          <Line
            type="monotone"
            dataKey="salesEmployees"
            stroke="blue"
            strokeWidth={3}
            name="Sales Employees"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  </CardContent>
</Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="bg-gradient-to-r from-green-300 to-teal-500 text-gray-800 transition-all duration-300 ease-in-out shadow-lg hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Current Employees
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-orange-700 font-semibold">
                    +20% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-300 to-indigo-500 text-gray-800 transition-all duration-300 ease-in-out shadow-lg hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Departments
                  </CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-red-900 font-semibold">
                    2 new departments added
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-800 transition-all duration-300 ease-in-out shadow-lg hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Payroll
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2.4M</div>
                  <p className="text-xs text-yellow-900 font-semibold">
                    +5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-300 to-red-500 text-gray-800 transition-all duration-300 ease-in-out shadow-lg hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Open Positions
                  </CardTitle>
                  <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-purple-900 font-semibold">
                    12 positions filled this month
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="-mb-7 text-center font-bold text-xl mt-2">
            Leave Details
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 m-10">
            <Card className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm  text-gray-800 font-bold">
                  Leave Applied
                </CardTitle>
                <Calendar1 className="h-5 w-5 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">120</div>
                <p className="text-xs text-orange-900 font-semibold">
                  Total leaves applied
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm  text-gray-800 font-bold">
                  Pending
                </CardTitle>
                <Clock className="h-5 w-5 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">10</div>
                <p className="text-xs text-gray-800 font-semibold">
                  Leaves pending approval
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-lime-500 to-green-500 text-gray-800 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm  text-gray-800 font-bold">
                  Approved
                </CardTitle>
                <CheckCircle className="h-5 w-5 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">85</div>
                <p className="text-xs text-red-900 font-semibold">
                  Leaves approved this month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
