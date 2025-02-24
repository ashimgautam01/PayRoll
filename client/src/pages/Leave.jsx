import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/Sidebar'
import AdminHeader from '../components/AdminHeader'
import { Eye, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { leaveService } from '../services/leaveServices'

                                                                                                                                                                                                                                                                                                                              
const Leave = () => {
  const [model, setModel] = useState(false);
  const [leaveApplications,setLeaveApplication]=useState([])
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredApplications = leaveApplications.filter(
    (application) =>
      application.leaveType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const company=sessionStorage.getItem('company')
  const company_id=JSON.parse(company).company_id
const getApplications=async()=>{
  const response=await leaveService.getAllLeave({company:company_id})
  setLeaveApplication(response.data.data)
  console.log(response.data.data);
}
  useEffect(()=>{
    getApplications()
  },[])
  const handleView = (application) => {
    setSelectedApplication(application);
    setModel(true);
  };

  const handleChangeStatus=async(status)=>{
    console.log(selectedApplication._id);
    const response=await leaveService.changeStatus({id:selectedApplication._id,status})
    if(response){
      console.log("status changed");
    }
    getApplications()
    setModel(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <AdminHeader />
          <main className="p-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold text-teal-700 mb-6">Leave Applications</h1>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="flex items-center mb-6">
                  <Search className="text-teal-500 mr-2" />
                  <Input
                    type="text"
                    placeholder="Search by name, employee ID, leave type, or status..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow"
                  />
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-teal-50">
                        <TableHead className="text-teal-700">S.No</TableHead>
                        <TableHead className="text-teal-700">Emp ID</TableHead>
                        <TableHead className="text-teal-700">Name</TableHead>
                        <TableHead className="text-teal-700">Leave Type</TableHead>
                        <TableHead className="text-teal-700">Applied Date</TableHead>
                        <TableHead className="text-teal-700">Status</TableHead>
                        <TableHead className="text-teal-700">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredApplications.map((application,index) => (
                        <TableRow key={index} className="hover:bg-teal-50 transition-colors">
                          <TableCell>{index+1}</TableCell>
                          <TableCell>{application.emp_id}</TableCell>
                          <TableCell className="font-medium">{application.name}</TableCell>
                          <TableCell>{application.leaveType}</TableCell>
                          <TableCell>{new Date(application.startDate).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })}</TableCell>
                          <TableCell>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                application.status === "Approved"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {application.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() => handleView(application)}
                              variant="ghost"
                              className="text-teal-600 hover:text-teal-700 hover:bg-teal-100 transition-colors h-10"
                            >
                              <Eye className="h-5 w-5" /> View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </main>
          {selectedApplication && (
            <Dialog open={model} onOpenChange={setModel}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Application for Leave</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-right text-sm font-medium">Date: {new Date(selectedApplication.createdAt).toLocaleDateString('en-GB',{day:"numeric",month:"short",year:"numeric"})}</p>
                  <p>To: HR Manager</p>
                  <p>Subject: Application for Leave</p>
                  <p>Dear Sir/Madam,</p>
                  <p>
                    I am writing to formally request leave from{" "}
                    <span className="text-red-700 font-medium">{new Date(selectedApplication.startDate).toLocaleDateString('en-GB',{day:'numeric',month:"short",year:"numeric"})}</span> to{" "}
                    <span className="text-red-700 font-medium">{new Date(selectedApplication.endDate).toLocaleDateString('en-GB',{day:"numeric",month:"short",year:"numeric"})}</span>, as I need to take{" "}
                    <span className="text-blue-700 font-bold">{selectedApplication.leaveType}</span> leave. During my
                    absence, I will ensure that my responsibilities are managed.
                  </p>
                  <p>
                    Please let me know if any additional arrangements or documentation are required. I kindly request
                    your approval of this leave application. Thank you for considering my request.
                  </p>
                  <p>Sincerely,</p>
                  <p className="text-gray-950 font-medium">{selectedApplication.name}</p>
                  <p className="text-yellow-800 ">Employee ID: {selectedApplication.emp_id}</p>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={()=>handleChangeStatus('rejected')} className="hover:bg-red-500 hover:text-white">
                    Reject
                  </Button>
                  <Button onClick={()=>handleChangeStatus('approved')} className="bg-green-500 hover:scale-105 hover:bg-green-700">Approve</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leave;
