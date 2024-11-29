import {  useEffect, useState } from "react";
import CompanyDetails from "../components/CompanyDetails";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import UserDetails from "../components/UserDetails";
import profileServices from "../services/profileServices";

const mockUserData=null
const mockCompanyData = [
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
  {
    name: "EcoTech Innovations",
    founded: "2020",
    industry: "Clean Energy",
    employees: "50-100",
    website: "www.ecotechinnovations.com",
    description:
      "EcoTech Innovations is at the forefront of developing sustainable energy solutions for a greener future.",
    keyMetrics: [
      { label: "Annual Revenue", value: "$5M" },
      { label: "Growth Rate", value: "30%" },
      { label: "Customers", value: "500+" },
      { label: "Patents", value: "15" },
    ],
  },
];
const ProfilePage = () => {
  const [userprofile,setUserprofile]=useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchUser=async()=>{
      setLoading(true)
      const response=await profileServices.getUserProfile()
      setUserprofile(response[0])
      console.log(response[0]);
      setLoading(false)
    }
    fetchUser()
  },[])

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-teal-50 flex flex-col py-10">
        <main className="w-full flex flex-col items-center gap-y-6">
          <div className="w-full max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          {loading ? (
              <div>Loading...</div>  
            ) : (
              <UserDetails user={userprofile} />
            )}
          </div>
          {mockUserData ?
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <CompanyDetails company={mockCompanyData} />
          </div>
          :
          <></>
          }

        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
