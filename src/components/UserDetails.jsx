import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import profileServices from "../services/profileServices";
import { Loader } from "lucide-react";

const UserDetails = ({ user }) => {
  const [modal, showModal] = useState(false);
  const [loading, Setloading] = useState(false);
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    Setloading(true);
    const response = await profileServices.addDetails({ data });
    console.log(response);
    showModal(false);
  };

  return (
    <div>
      <Card className="bg-white shadow-lg">
        <CardHeader className="text-center">
            <div className="font-bold text-xl text-teal-800 mb-2">User Details</div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center lg:space-x-44">
            <div>
        {user ? (
            <>
              <Avatar className="w-36 h-36 mx-auto mb-4">
                <AvatarImage src={user.User_Profile[0].profile} alt={user.name} />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl font-bold text-teal-800">
                {user.fullName}
              </CardTitle>
            </>
          ) : (
            <CardTitle></CardTitle>
          )}
          </div>
          <div>
          {user ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-teal-600">Email</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-teal-600">Role</p>
                <p className="text-sm text-gray-600">{user.User_Profile[0].role}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-teal-600">Location</p>
                <p className="text-sm text-gray-600">{user.User_Profile[0].address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-teal-600">Bio</p>
                <p className="text-sm text-gray-600">{user.User_Profile[0].bio}</p>
              </div>
            </div>
          ) : (
            <div className="text-center h-36 md:p-10">
              <div className="text-gray-600 italic text-lg -mt-5 lg:-mt-10">
                Your profile is not created please first create your
                profile.......  
              </div>
              <Button
                onClick={() => showModal(true)}
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 mt-5 lg:mt-10"
              >
                Add Details
              </Button>
            </div>
          )}
          </div>
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={modal} onOpenChange={showModal}>
        <DialogContent>
          <DialogTitle className="text-center">Add Details</DialogTitle>
          <form className="space-y-4" onSubmit={handleSubmit(create)}>
            <div>
              <label className="block text-sm font-medium text-teal-600">
                Profile Picture
              </label>
              <Input
                type="file"
                name="profile"
                {...register("profile")}
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">
                Phone
              </label>
              <Input
                type="tel"
                name="phone"
                {...register("phone")}
                placeholder="Enter your phone number"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">
                Gender
              </label>
              <select
                name="gender"
                {...register("gender")}
                className="w-full border border-solid border-gray-400 rounded mt-1 "
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">
                Address
              </label>
              <Input
                type="text"
                name="address"
                {...register("address")}
                placeholder="Enter your address"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">
                Role
              </label>
              <Input
                type="text"
                name="role"
                {...register("role")}
                placeholder="Enter your role"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-teal-600">
                Bio
              </label>
              <Textarea
                name="bio"
                {...register("bio")}
                placeholder="Write a short bio"
                className="mt-1"
                required
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                variant="default"
                size="sm"
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                {loading ? <Loader className="animate-spin" /> : <></>}Save
              </Button>
              <Button
                onClick={() => showModal(false)}
                variant="outline"
                size="sm"
                className="text-teal-600 hover:text-red-500"
              >
                Close
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserDetails;
