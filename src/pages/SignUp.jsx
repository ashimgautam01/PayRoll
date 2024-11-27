import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle,CardDescription } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        {/* Animated Image Section */}
        <div className=" sm:block w-1/2 flex justify-center items-center">
          <img
            src="https://example.com/your-animated-image.gif" // Replace with your image URL
            alt="Animated Illustration"
            className="w-full max-w-md animate-bounce"
          />
        </div>

        {/* Sign Up Form */}
        <Card className="w-full sm:w-96 bg-white shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-center text-gray-700">Create an Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" action="#" method="POST">
              {/* Full Name */}
              <div>
                <Label htmlFor="name" className="text-lg text-gray-600">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  placeholder="Enter your full name"
                  className="mt-2 p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-lg text-gray-600">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="Enter your email"
                  className="mt-2 p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="text-lg text-gray-600">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  placeholder="Create a password"
                  className="mt-2 p-3 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <Button type="submit" className="w-full bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600">
                Sign Up
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-center w-full text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-teal-500 hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default SignUp
