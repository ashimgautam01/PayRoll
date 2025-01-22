import { useEffect, useState } from "react";
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
import { useForm } from "react-hook-form";
import { leaveService } from "../../services/leaveServices";
import { useSelector } from "react-redux";

// const leaveApplications = [
//   {
//     id: 1,
//     startDate: "2023-07-01",
//     endDate: "2023-07-05",
//     type: "Vacation",
//     status: "Approved",
//   },
//   {
//     id: 2,
//     startDate: "2023-08-15",
//     endDate: "2023-08-16",
//     type: "Sick Leave",
//     status: "Pending",
//   },
// ];

const Leave = () => {
  const {register,handleSubmit,reset}=useForm()
  const [leaveApplications,setLeaveapplications]=useState([])
 const user=useSelector((state)=>state.auth.data.id)
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLeaveSubmit =async (data) => {
    const response=await leaveService.applyLeave({user,data})
    console.log(response);
    getLeave()
    reset()
    setIsDialogOpen(false);
  };
  const getLeave=async()=>{
    const response=await leaveService.getLeave({employee:user})
    console.log(response.data.data);
    setLeaveapplications(response.data.data)
  }
  useEffect(()=>{
    getLeave()
  },[])

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
              <TableHead>S.N</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaveApplications.map((leave,index) => (
              <TableRow key={leave._id} className="bg-pink-50 hover:bg-teal-100">
                <TableCell>{index+1}</TableCell>
                <TableCell>{new Date(leave.startDate).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })}</TableCell>
                <TableCell>{new Date(leave.endDate).toLocaleDateString('en-GB',{ day:'numeric', month:'short', year:'numeric' })}</TableCell>
                <TableCell>{leave.leaveType}</TableCell>
                <TableCell>{leave.reason}</TableCell>
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
            <form onSubmit={handleSubmit(handleLeaveSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <Input
                      id="startDate"
                      type="date"
                      {...register('startDate')}
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
                      {...register('endDate')}
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="leaveType">Leave Type</Label>
                <Input
                  id="leaveType"
                  {...register('leaveType')}
                  required
                />
              </div>
              <div>
                <Label htmlFor="reason">Reason</Label>
                <div className="flex items-start space-x-2">
                  <FileText className="w-4 h-4 text-teal-600 mt-3" />
                  <Textarea
                    id="reason"{...register('reason')}
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
