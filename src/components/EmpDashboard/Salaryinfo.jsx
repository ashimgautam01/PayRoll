import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarDays, DollarSign, IndianRupeeIcon } from 'lucide-react'
import { useEffect, useState } from "react"
import salaryServices from "../../services/salaryservice"
import { useSelector } from "react-redux"

const Salaryinfo = () => {
  const [salaryData, setSalaryData] = useState(null)  
  const id = useSelector((state) => state.auth.data.id)

  const getSalary = async () => {
    try {
      const response = await salaryServices.getSingleSalary(id)
      console.log('Salary Response:', response)  
      setSalaryData(response.data[0])
    } catch (error) {
      console.error('Error fetching salary:', error)
    }
  }
  useEffect(() => {
    getSalary()
  }, [])

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() // Returns in format like "1/22/2025"
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-700">Salary Received Details</h3>
          <Table>
            <TableHeader>
              <TableRow className="bg-teal-300">
                <TableHead>S.N</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Pay Date</TableHead>
                <TableHead>Bonus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salaryData?.Salary_Info?.map((payment, index) => (
                <TableRow key={payment._id} className="bg-purple-50 hover:bg-teal-100">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <span className="text-sm text-black">{payment.month}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <IndianRupeeIcon className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">{payment?.salary?.toLocaleString() || 0}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <CalendarDays className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">{formatDate(payment.payDate)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <IndianRupeeIcon className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">${payment?.bonus?.toLocaleString() || 0}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Salaryinfo
