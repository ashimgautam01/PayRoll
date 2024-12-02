import {Router} from 'express'
import { addSalary, getAllEmployeeSalary, getSingleSalary } from '../controllers/salary.controller.js'
const router=Router()

router.route('/add/:id').post(addSalary)
router.route('/getsalary/:id').get(getSingleSalary)
router.route('/getall/:id').get(getAllEmployeeSalary)

export default router