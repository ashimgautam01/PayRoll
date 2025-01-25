import React from "react";
import { Home, Users, DollarSign, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const navItems = [
    { title: "Dashboard", icon: Home, url: "/dashboard" },
    { title: "Employees", icon: Users, url: "/employees" },
    { title: "Salary", icon: DollarSign, url: "/salary" },
    { title: "Leaves", icon: Home, url: "/leaves" },
    { title: "Settings", icon: Settings, url: "/setting" },
    { title: "Logout", icon: LogOut, url: "/logout" },
  ];

  return (
    <div className="min-h-min w-64 bg-gradient-to-b from-teal-400 to-teal-900 text-white flex flex-col shadow-lg">
      <div className="flex items-center justify-center h-20 bg-green-800 text-2xl font-semibold tracking-wide">
        Admin Panel
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.url}
                className="group flex items-center space-x-4 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300" />
                <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-all duration-300">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
