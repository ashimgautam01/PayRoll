import jwt from 'jsonwebtoken'

const verifyJwt=(req,res,next)=>{
    const token=req.cookie("accessToken")
    console.log(token);
}

export default verifyJwt