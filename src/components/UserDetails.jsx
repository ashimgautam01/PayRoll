import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserDetails = ({user}) => {
  return (
    <div>
         <Card className="bg-white shadow-lg">
      <CardHeader className="text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl font-bold text-teal-800">{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-teal-600">Email</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-teal-600">Role</p>
            <p className="text-sm text-gray-600">{user.role}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-teal-600">Location</p>
            <p className="text-sm text-gray-600">{user.location}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-teal-600">Bio</p>
            <p className="text-sm text-gray-600">{user.bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default UserDetails