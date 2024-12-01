import {Router} from 'express'
import { addSalary, getSalary } from '../controllers/salary.controller.js'
const router=Router()

router.route('/add/:id').post(addSalary)
router.route('/getsalary/:id').get(getSalary)

export default router