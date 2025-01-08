import { BASE_URL } from "../lib/constants/Constants";
import axios from "axios";


class SalaryService{

    async addSalary(id,data){
        try {
            const response=await axios.post(
                `${BASE_URL}/api/v1/salary/add/${id}`,
                {
                    data
                },
                {withCredentials:true}
            )
            return response.data
        } catch (error) {
            console.log(error);
            return error
        }
    }

    async getSingleSalary(id){
        try {
            const response=await axios.get(
                `${BASE_URL}/api/v1/salary/get/${id}`,
                {withCredentials:true}
            )
            return response.data
        } catch (error) {
            console.log(error);
            return null
        }
    }

    async getAllSalary(id){
        try {
            const response=await axios.get(
                `${BASE_URL}/api/v1/salary/getall/${id}`,
                {withCredentials:true}
            )
            return response.data
        } catch (error) {
            console.log(error);
            return null
        }
    }

}


const salaryServices=new SalaryService()

export default salaryServices