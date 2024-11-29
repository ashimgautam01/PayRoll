import {  useEffect, useState } from "react";
import CompanyDetails from "../components/CompanyDetails";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import UserDetails from "../components/UserDetails";
import profileServices from "../services/profileServices";
import companyService from "../services/companyServices";


const ProfilePage = () => {
  const [userprofile,setUserprofile]=useState([])
  const [company,setCompany]=useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchUser=async()=>{
      setLoading(true)
      const response=await profileServices.getUserProfile()
      setUserprofile(response[0])
      setLoading(false)
    }
    const fetchUserCompany=async()=>{
      setLoading(true)
      const response=await companyService.getUserCompany()
      // console.log(response);
      setCompany(response)
      setLoading(false)
    }

    fetchUser()
    fetchUserCompany()
  },[])

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-teal-50 flex flex-col py-10">
     <div className="flex justify-end mr-10 ">
    {userprofile? <Button className="bg-teal-700 hover:bg-teal-800 hover:scale-105 mb-5">Edit Profile</Button>:<></>}
     </div>
        <main className="w-full flex flex-col items-center gap-y-6">
          <div className="w-full max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          {loading ? (
              <div>Loading...</div>  
            ) : (
              <UserDetails user={userprofile} />
            )}
          </div>
          {userprofile ?
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h4 className="text-center font-bold text-3xl text-teal-700 font-serif mt-5 ">List of Your Companies</h4>
            <CompanyDetails company={company} />
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
