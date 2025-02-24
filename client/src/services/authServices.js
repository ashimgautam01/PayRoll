import axios from "axios";
import { BASE_URL } from "../lib/constants/Constants";

class AuthService {
  async registerUser(data) {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/users/register`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(data){
    try {
        const response=await axios.post(
            `${BASE_URL}/api/v1/users/login`,
            data,
            {withCredentials:true}
        )
        return response.data
    } catch (error) {
        throw error
    }
  }
  
  async getUser(){
    try {
        const response=await axios.get(
            `${BASE_URL}/api/v1/users/me`,
            {withCredentials:true}
        )
        return response
    } catch (error) {
        throw error
    }
  }
  async logOut(){
    try {
      const response=await axios.post(
        `${BASE_URL}/api/v1/users/logout`,
        {},
        {withCredentials:true}  
      )
      return response
    } catch (error) {
      console.log(error); 
     return null
    }
  }
}
const authService = new AuthService();
export default authService;
