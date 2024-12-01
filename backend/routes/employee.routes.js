import { Router } from "express";
import { getEmployeeDetails, getSingle, registerEmployee } from "../controllers/employees.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router=Router()


router.route('/register/:id').post(
    upload.fields([{
        name:"profile",
        maxcount:1
    }]),
    registerEmployee)

router.route('/getallemployee/:id').get(getEmployeeDetails)
router.route('/getsingle/:id').get(getSingle)

export default router