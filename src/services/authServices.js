import axios from "axios";
import { BASE_URL } from "../lib/constants/Constants";

class AuthService {
  async registerUser(data) {
    try {
      const resposne = await axios.post(
        `${BASE_URL}/api/v1/users/register`,
        data
      );
      return resposne;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(data){
    try {
        const resposne=await axios.post(
            `${BASE_URL}/api/v1/users/login`,
            data,
            {withCredentials:true}
        )
        return resposne
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
}
const authService = new AuthService();
export default authService;
