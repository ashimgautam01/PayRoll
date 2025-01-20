import {Router} from 'express'
import { applyLeave, changeStatus, getLeave } from '../controllers/leave.controller.js'

const router =Router()

router.route('/apply').post(applyLeave)
router.route('/getleave').get(getLeave)
router.route('/changeStatus/:id').patch(changeStatus)

export default router