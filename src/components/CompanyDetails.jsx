import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Building2Icon, Calendar, FactoryIcon, Globe,  Link2,  PhoneCall } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { getcompany } from '../store/companySlice';


const CompanyDetails = ({ company }) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const show=(item)=>{
    console.log(item);
    const company={
        company_id:item._id
    }
    dispatch(getcompany(company))
    navigate('/dashboard')
  }
    return (
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:m-16">
            {company.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, transform: "scale(0.8)" }}
                    animate={{ opacity: 1, transform: "scale(1)" }}
                    transition={{ duration: 0.4 }}
                >
                    <Card className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold text-teal-800 flex items-center gap-2">
                                <Building2Icon size={24} />
                                {item.name || "N/A"}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="mb-4">
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <Globe size={18} className="text-teal-600" />
                                    <span className="font-medium text-teal-600">Website: </span>
                                    <a
                                        href={item.website || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 underline"
                                    >
                                        {item.website || "N/A"}
                                    </a>
                                </p>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <FactoryIcon size={18} className="text-teal-600" />
                                    <span className="font-medium text-teal-600">Industry: </span>
                                    {item.industry || "N/A"}
                                </p>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <PhoneCall size={18} className="text-teal-600" />
                                    <span className="font-medium text-teal-600">Phone: </span>
                                    {item.phone || "N/A"}
                                </p>
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                    <Calendar size={18} className="text-teal-600" />
                                    <span className="font-medium text-teal-600">Established: </span>
                                    {new Date(item.establishedDate).toLocaleDateString() || "N/A"}
                                </p>
                                <p className="text-sm text-gray-600 mb-4">
                                    <span className="font-medium text-teal-600">Bio: </span>
                                    {item.bio || "No bio available."}
                                </p>
                            </div>

                            {item.metrics && item.metrics.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-teal-800 mb-2">Key Metrics</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-teal-50 rounded-lg p-4 text-center shadow-sm">
                                            <p className="text-sm font-medium text-teal-600">Revenue</p>
                                            <p className="text-xl font-bold text-teal-800">{item.metrics[0].revenue || "N/A"}</p>
                                        </div>
                                        <div className="bg-teal-50 rounded-lg p-4 text-center shadow-sm">
                                            <p className="text-sm font-medium text-teal-600">Growth (%)</p>
                                            <p className="text-xl font-bold text-teal-800">{item.metrics[0].growth || "N/A"}%</p>
                                        </div>
                                        <div className="bg-teal-50 rounded-lg p-4 text-center shadow-sm">
                                            <p className="text-sm font-medium text-teal-600">Customers</p>
                                            <p className="text-xl font-bold text-teal-800">{item.metrics[0].customers || "N/A"}</p>
                                        </div>
                                        <div className="bg-teal-50 rounded-lg p-4 text-center shadow-sm">
                                            <p className="text-sm font-medium text-teal-600">Branches</p>
                                            <p className="text-xl font-bold text-teal-800">{item.metrics[0].branches || "N/A"}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        
                        <div className="mt-4 flex justify-center">
                           
                            <Button
                                // to={`/dashboard/${item._id}`} 
                                onClick={()=>show(item)}
                                className=" bg-teal-600 text-white py-2 px-4 rounded-lg text-center w-40 block hover:bg-teal-700 transition duration-300"
                            >
                                View
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default CompanyDetails;
