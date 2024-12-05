import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

const EmployeeCard = ({ isOpen, onClose, employee }) => {

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <DialogHeader>
            <div className="flex items-center space-x-6">
              <img
                src={employee?.profile || "/default-avatar.png"}
                alt={employee?.fullname}
                className="h-32 w-32 rounded-full object-cover"
              />
              <div>
                <DialogTitle className="text-3xl font-semibold text-teal-600">
                  {employee?.fullname}
                </DialogTitle>
                <div>{employee?.status=="active"?
                <div className="bg-green-600 w-14 text-center text-white rounded-lg text-sm">Active</div>:
                <div className="bg-red-600 w-16 text-center text-white rounded-lg text-sm">On Leave</div>  
              }</div>
                <DialogDescription className="mt-2 text-sm text-gray-600">
                  Here are the details for {employee?.fullname}.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              <p>
                <strong className="text-teal-700">Email:</strong>{" "}
                {employee?.email}
              </p>
              <p>
                <strong className="text-teal-700">Department:</strong>{" "}
                {employee?.department}
              </p>
              <p>
                <strong className="text-teal-700">Salary:</strong> $
                {employee?.salary}
              </p>
              <p>
                <strong className="text-teal-700">Phone:</strong>{" "}
                {employee?.phone}
              </p>
              <p>
                <strong className="text-teal-700">Address:</strong>{" "}
                {employee?.address}
              </p>
              <p>
                <strong className="text-teal-700">Education:</strong>{" "}
                {employee?.education}
              </p>
              <p>
                <strong className="text-teal-700">Date of Birth: </strong>
                {employee?.dob &&
                  (() => {
                    const date = new Date(employee.dob);
                    const year = date.getFullYear();
                    const month = date.toLocaleString("default", {
                      month: "long",
                    });
                    const day = date.getDate();
                    return `${month} ${day}, ${year}`;
                  })()}
              </p>
              <p>
                <strong className="text-teal-700">Joined Date:</strong>{" "}
                {employee?.joined &&
                  (() => {
                    const date = new Date(employee.joined);
                    const year = date.getFullYear();
                    const month = date.toLocaleString("default", {
                      month: "long",
                    });
                    const day = date.getDate();
                    return `${month} ${day}, ${year}`;
                  })()}
              </p>
              <p>
                <strong className="text-teal-700">Marital Status:</strong>{" "}
                {employee?.maritalStatus}
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              className="text-teal-600 hover:text-teal-700"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeCard;
