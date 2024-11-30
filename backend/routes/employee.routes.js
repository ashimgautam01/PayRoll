import { Router } from "express";
import { getEmployeeDetails, registerEmployee } from "../controllers/employees.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router=Router()


router.route('/register/:id').post(
    upload.fields([{
        name:"profile",
        maxcount:1
    }]),
    registerEmployee)

router.route('/getallemployee/:id').get(getEmployeeDetails)

export default router