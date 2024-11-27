import React from 'react'
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const Login = ({isOpen,setIsOpen}) => {

  return (
    <div>
         <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div />
        </DialogTrigger>
        <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-center">Login</DialogTitle>
          </DialogHeader>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-center">Email</Label>
                <Input id="email" type="email" placeholder="your.email@company.com" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500" />
              </div>
            </div>
            <DialogFooter className="flex justify-end space-x-4 mt-6">
              <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">Log in</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Login