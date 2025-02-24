import axios from "axios"
import {BASE_URL} from '../lib/constants/Constants'

class EmployeeServices{

    async addEmployee({company_id,data}){
        try {
            const formdata=new FormData()
            console.log(data);
            formdata.append("profile",data.profile[0])
            formdata.append("fullname",data.fullname)
            formdata.append("phone",data.phone.trim())
            formdata.append("email",data.email)
            formdata.append("department",data.department)
            formdata.append("address",data.address)
            formdata.append("gender",data.gender)
            formdata.append("dob",data.dob)
            formdata.append("phone",data.phone)
            formdata.append("joined",data.joined)
            formdata.append("education",data.education)
            formdata.append("maritalStatus",data.maritalStatus)
            formdata.append("ename",data.ename)
            formdata.append("ephone",data.ephone)
            const response=await axios.post(
                `${BASE_URL}/api/v1/employee/register/${company_id}`,
                formdata,
                {withCredentials:true}
            )
            return response.data

        } catch (error) {
            throw error
        }
    }

    async getEmployees({company_id}){
        try {
            const response=await axios.get(
                `${BASE_URL}/api/v1/employee/getallemployee/${company_id}`,
                {withCredentials:true}
            )
            return response.data
        } catch (error) {
            throw error
        }
    }

    async getSingleEmployee({employee}){
        try {
            console.log();
            const response=await axios.get(
                `${BASE_URL}/api/v1/employee/getsingle/${employee}`
            )
            return response.data[0]
        } catch (error) {
            throw error
        }
    }

    async employeeLogin({data}){
        try {
            const response=await axios.post(
                `${BASE_URL}/api/v1/employee/login`,
                data,
                {withCredentials:true}
            )
            return response.data.data
        } catch (error) {
            throw error
        }
    }
}

const employeeServices=new EmployeeServices()

export default employeeServices