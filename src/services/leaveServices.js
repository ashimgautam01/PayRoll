import axios from "axios";
import {BASE_URL} from '../lib/constants.js'
class LeaveServices{

    async applyLeave({data}){
        try {
            const response=await axios.post(
                `${BASE_URL}/api/v1/leave/apply`,
                data
            )
            return response
        } catch (error) {
            console.log(error);
        }
    }

    async getLeave({employee}){
        try {
            const response=await axios.get(
                `${BASE_URL}/api/v1/get`,
               { employee}
            )
            return response
        } catch (error) {
            console.log(error);
        }
    }

    async getAllLeave(){
        try {
            const resposne=await axios.get(
                `${BASE_URL}/api/v1/getall`
            )
            return resposne
        } catch (error) {
            console.log(error);
        }
    }

    async changeStatus({id,status}){
        try {
            const response=await axios.patch(
                `${BASE_URL}/api/v1/changeStatus`,
                {status}
            )
            return response
        } catch (error) {
            console.log(error);
        }
    }

}

const leaveService=new LeaveServices()

export {leaveService}