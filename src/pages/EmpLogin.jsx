import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import Navbar from '../components/Navbar';
import {Input} from '../components/ui/input'
import {Label} from '../components/ui/label'

const EmpLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {

    };
  
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-teal-100 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm -mt-20">
        <h2 className="text-2xl font-semibold text-teal-600 text-center mb-6">Employee Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-teal-600 font-medium">Username</label>
            <div className="relative mt-2">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full p-3 border-2 border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your username"
              />
              <span className="absolute top-0 left-3 text-teal-500 text-xl">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="block text-teal-600 font-medium">Password</Label>
            <div className="relative mt-2">
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border-2 border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
              />
              <span className="absolute top-0 left-3 text-teal-500 text-xl">
                <i className="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Label className="inline-flex items-center text-teal-600">
              <Input type="checkbox" className="form-checkbox text-teal-600 w-3 mr-2" />{' '}
              Remember me
            </Label>
            <a href="#" className="text-teal-600 text-sm hover:underline">Forgot password?</a>
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default EmpLogin