import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarDays, DollarSign } from 'lucide-react'

const salaryData = {
  paymentHistory: [
    { id: 1, date: "2023-05-31", amount: 6250, type: "Monthly Salary" },
    { id: 2, date: "2023-04-30", amount: 6250, type: "Monthly Salary" },
    { id: 3, date: "2023-03-31", amount: 6250, type: "Monthly Salary" },
    { id: 4, date: "2023-02-28", amount: 6250, type: "Monthly Salary" },
    { id: 5, date: "2023-01-31", amount: 6250, type: "Monthly Salary" },
  ],
}

const Salaryinfo = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-teal-700">Salary Received Details</h3>
          <Table>
            <TableHeader>
              <TableRow className="bg-teal-300">
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salaryData.paymentHistory.map((payment) => (
                <TableRow key={payment.id} className="bg-purple-50 hover:bg-teal-100">
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <CalendarDays className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">{payment.date}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-teal-600" />
                      <span className="text-sm">${payment.amount.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{payment.type}</span>
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
