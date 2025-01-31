import axios from "axios"
import { BASE_URL } from "../lib/constants/Constants"

class CompanyServices{

    async registerCompany ({data}){
        try {
            const response=await axios.post(
                `${BASE_URL}/api/v1/company/register`,
                data,
                {withCredentials:true}
            )
            return response.data
        } catch (error) {
            throw error
        }
    }

    async getUserCompany(){
        try {
            const response=await axios.get(
                `${BASE_URL}/api/v1/company/usercompany`,
                {withCredentials:true}
            )
        return response.data.data       
        } catch (error) {
            throw error
        }
    }

    async updateMonthlyData({newData}){
        try {
            const response=await axios.put(
                `${BASE_URL}/api/v1/company/updatemonthly`,
                {newData},
                {withCredentials:true}
            )
        } catch (error) {
            console.log(error);
            return null
        }
    }

}


const companyService=new CompanyServices()

export default companyService