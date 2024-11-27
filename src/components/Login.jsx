import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import authService from "../services/authServices";

const Login = ({ isOpen, setIsOpen }) => {
  const dispatch=useDispatch()
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()

  const loginUser = async(data) => {
    const response=await authService.loginUser(data)
    const userdata={
      _id:response.message.loggedInUser._id,
      email:response.message.loggedInUser.email
    }
    if(response){
      dispatch(login(userdata))
    }
  setIsOpen(false)
   navigate("/")
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div />
        </DialogTrigger>
        <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-xl"
       
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      
        >
          <DialogHeader>
            <DialogTitle className="text-center">Login</DialogTitle>
            <p id="dialog-description" className="sr-only">
          Please enter your email and password to log in to your account.
        </p>
          </DialogHeader>
          <form onSubmit={handleSubmit(loginUser)}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-center">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your.email@company.com"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            <DialogFooter className="flex justify-end space-x-4 mt-6">
              <Button
                type="submit"
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                Log in
              </Button>
             
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
