import { Router } from "express";
import { addProfile, getUserProfile } from "../controllers/userProfile.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {upload} from '../middlewares/multer.middleware.js'
const router=Router()

router.route("/add"
).post(
    upload.fields([{ name: 'profile', maxCount: 1 }]),verifyJwt,addProfile)

router.route('/getprofile').get(verifyJwt,getUserProfile)

export default router