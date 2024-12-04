import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Calendar, FileText } from "lucide-react";

const initialLeaveApplications = [
  {
    id: 1,
    startDate: "2023-07-01",
    endDate: "2023-07-05",
    type: "Vacation",
    status: "Approved",
  },
  {
    id: 2,
    startDate: "2023-08-15",
    endDate: "2023-08-16",
    type: "Sick Leave",
    status: "Pending",
  },
];

const Leave = () => {
  const [leaveApplications, setLeaveApplications] = useState(
    initialLeaveApplications
  );
  const [newLeave, setNewLeave] = useState({
    startDate: "",
    endDate: "",
    type: "",
    reason: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      id: leaveApplications.length + 1,
      ...newLeave,
      status: "Pending",
    };
    setLeaveApplications([...leaveApplications, newApplication]);
    setNewLeave({ startDate: "", endDate: "", type: "", reason: "" });
    setIsDialogOpen(false);
  };

  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="flex justify-end -mt-5 mb-5 ">
        <Button
          className="bg-teal-600 hover:bg-teal-700  "
          onClick={() => setIsDialogOpen(true)}
        >
          <PlusCircle className="w-4 h-4 mr-2 " />
          <p className="hidden sm:inline">New Leave Application</p>
        </Button>
      </div>
      <div className="space-y-8">
        <Table>
          <TableHeader>
            <TableRow className="bg-teal-300 hover:bg-teal-400 ">
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaveApplications.map((leave) => (
              <TableRow key={leave.id} className="bg-pink-50 hover:bg-teal-100">
                <TableCell>{leave.startDate}</TableCell>
                <TableCell>{leave.endDate}</TableCell>
                <TableCell>{leave.type}</TableCell>
                <TableCell>{leave.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Dialog to add new leave */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submit New Leave Application</DialogTitle>
              <DialogDescription>
                Fill out the form below to submit a new leave request.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <Input
                      id="startDate"
                      type="date"
                      value={newLeave.startDate}
                      onChange={(e) =>
                        setNewLeave({ ...newLeave, startDate: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <Input
                      id="endDate"
                      type="date"
                      value={newLeave.endDate}
                      onChange={(e) =>
                        setNewLeave({ ...newLeave, endDate: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="leaveType">Leave Type</Label>
                <Input
                  id="leaveType"
                  value={newLeave.type}
                  onChange={(e) =>
                    setNewLeave({ ...newLeave, type: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="reason">Reason</Label>
                <div className="flex items-start space-x-2">
                  <FileText className="w-4 h-4 text-teal-600 mt-3" />
                  <Textarea
                    id="reason"
                    value={newLeave.reason}
                    onChange={(e) =>
                      setNewLeave({ ...newLeave, reason: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                  Submit Leave Application
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Leave;
