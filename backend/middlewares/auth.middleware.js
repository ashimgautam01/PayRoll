import jwt from 'jsonwebtoken'
import ApiError from '../utils/ApiError.js';

const verifyJwt=(req,res,next)=>{
   try {

     const token=req.cookies?.accessToken
     if(!token){
         throw new Error(400,"token is required")
     }
     const data=jwt.verify(token,process.env.ACCESS_TOKEN_SCRT)
     if(!data){
         throw new ApiError(400,"Invalid token")
     }
     req.user=data
     next();
   } catch (error) {
    console.log(error);
   }
}

export  {verifyJwt}