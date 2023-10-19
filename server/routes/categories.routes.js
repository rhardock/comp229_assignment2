import express from 'express'
import categoryCtrl from '../controllers/categories.controller.js' 
const router = express.Router()

router.route('/api/categories') 
	.get(categoryCtrl.list)
	.post(categoryCtrl.create)

router.route('/api/categories').post(categoryCtrl.create) 
router.route('/api/categories').get(categoryCtrl.list)
router.route('/api/categories').delete(categoryCtrl.removeAll)

export default router
