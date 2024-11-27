import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, HelpCircle, LogOutIcon, User, UserCircle2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import Login from "./Login";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <nav className="bg-teal-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-bold">PayrollPro</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/dashboard"
                    className="hover:scale-1100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/employees"
                    className="hover:scale-110 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Employees
                  </Link>
                  <Link
                    to="/payroll"
                    className="hover:scale-110 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Payroll
                  </Link>
                  <Link
                    to="/reports"
                    className="hover:scale-110 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex justify-end md:ml-6 space-x-5">
                {/* <button className="bg-teal-500 p-1 rounded-full text-white hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-600 focus:ring-white">
                  <UserCircle2Icon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <DropdownMenu>
                  <DropdownMenuTrigger>  <UserCircle2Icon className="h-6 w-6" aria-hidden="true" /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><User/> Profile</DropdownMenuItem>
                    <DropdownMenuItem><Building2/>Your Companies</DropdownMenuItem>
                    <DropdownMenuItem><HelpCircle/>Help</DropdownMenuItem>
                    <DropdownMenuItem><LogOutIcon className="mr-2 h-4 w-4" aria-hidden="true" />Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  onClick={handleOpen}
                  className="bg-teal-500 text-white hover:bg-teal-600"
                >
                  Login
                </Button>

                {/* Login Button */}
                <div className="ml-4 flex items-center"></div>

                {/* Mobile menu button */}
                <div className="-mr-2 flex md:hidden">
                  <button
                    type="button"
                    className="bg-teal-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-600 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className="hidden h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className="hover:scale-105 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/employees"
              className="hover:scale-110 block px-3 py-2 rounded-md text-base font-medium"
            >
              Employees
            </Link>
            <Link
              to="/payroll"
              className="hover:scale-110 block px-3 py-2 rounded-md text-base font-medium"
            >
              Payroll
            </Link>
            <Link
              to="/reports"
              className="hover:scale-110 block px-3 py-2 rounded-md text-base font-medium"
            >
              Reports
            </Link>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
