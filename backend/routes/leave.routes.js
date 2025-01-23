import {Router} from 'express'
import { applyLeave, changeStatus, getAllLeave, getLeave } from '../controllers/leave.controller.js'

const router =Router()

router.route('/apply').post(applyLeave)
router.route('/getleave/:id').get(getLeave)
router.route('/getall/:id').get(getAllLeave)
router.route('/changeStatus/:id').patch(changeStatus)

export default router