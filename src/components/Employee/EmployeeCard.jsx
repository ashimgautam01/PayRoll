import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';

const EmployeeCard = ({ isOpen, onClose, employee }) => {
  console.log(employee);
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <DialogHeader>
            <div className="flex items-center space-x-6">
              <img
                src={employee?.profileImage || "/default-avatar.png"}
                alt={employee?.name}
                className="h-32 w-32 rounded-full object-cover"
              />
              <div>
                <DialogTitle className="text-3xl font-semibold text-teal-600">{employee?.name}</DialogTitle>
                <DialogDescription className="mt-2 text-sm text-gray-600">
                  Here are the details for {employee?.name}.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-6">
            <div className="grid grid-cols-2 gap-6">
              <p><strong>Email:</strong> {employee?.email}</p>
              <p><strong>Department:</strong> {employee?.department}</p>
              <p><strong>Salary:</strong> ${employee?.salary}</p>
              <p><strong>Phone:</strong> {employee?.phone}</p>
              <p><strong>Address:</strong> {employee?.address}</p>
              <p><strong>Education:</strong> {employee?.education}</p>
              <p><strong>Date of Birth:</strong> {employee?.dob}</p>
              <p><strong>Joined Date:</strong> {employee?.joinedDate}</p>
              <p><strong>Marital Status:</strong> {employee?.maritalStatus}</p>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={onClose} variant="outline" size="sm" className="text-teal-600 hover:text-teal-700">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeCard;
