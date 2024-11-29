import axios from "axios"
import { BASE_URL } from "../lib/constants/Constants"

class ProfileServices{

    async addDetails({data}){
        const formdata=new FormData()
        formdata.append("profile",data.profile[0])
        formdata.append("phone",data.phone)
        formdata.append("gender",data.gender)
        formdata.append("address",data.address)
        formdata.append("role",data.role)
        formdata.append("bio",data.bio)
        try {
            const response=await axios.post(
                `${BASE_URL}/api/v1/profile/add`,
                formdata,
                {
                    withCredentials:true
                }
            )
            return response.data
        } catch (error) {
            throw error
        }
    }

    async getUserProfile(){
        try {
            const response=await axios.get(
                `${BASE_URL}/api/v1/profile/getprofile`,
                {withCredentials:true}
            )
            return response.data.data 
        } catch (error) {
            return error
        }
    }

}


const profileServices=new ProfileServices()

export default profileServices