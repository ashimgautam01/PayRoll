import React from 'react'

const AdminHeader = () => {
  return (
    <div>  <div className="bg-green-800 h-20 text-gray-300 flex items-center justify-between px-8">
    <div>
      <h1 className="text-3xl font-extrabold text-white flex">
        Employee<div className="text-yellow-500"> Dashboard</div>
      </h1>
      <p className="text-sm mt-1 text-white opacity-80 italic">
        Manage and monitor employee activities and reports
      </p>
    </div>
    <div className="text-right">
      <p className="text-lg font-semibold text-white flex">
        Welcome, <p className="text-yellow-300">Ashim</p>
      </p>
      <p className="text-sm text-white opacity-80">
        Role: Administrator
      </p>
      <p className="text-sm text-white opacity-80">
        Last Login: {new Date().toLocaleDateString()}
      </p>
    </div>
  </div></div>
  )
}

export default AdminHeader