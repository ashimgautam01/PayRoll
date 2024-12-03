import { Router } from "express";
import { employeeLogin, getEmployeeDetails, getSingle, registerEmployee } from "../controllers/employees.controller.js";
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
router.route('/login').post(employeeLogin)

export default router