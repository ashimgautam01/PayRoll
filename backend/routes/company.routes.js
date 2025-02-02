import {Router} from 'express'
import { createCompany, getMonthlyData, getUserCompany, updateMonthlyData } from '../controllers/company.controller.js'
import { verifyJwt } from '../middlewares/auth.middleware.js'
const router =Router()

router.route("/register").post(verifyJwt,createCompany)
router.route('/usercompany').get(verifyJwt,getUserCompany)
router.route('/updatemonthly').put(verifyJwt,updateMonthlyData)
router.route('/getdata/:id').get(verifyJwt,getMonthlyData)

export default router