const express = require('express')
const router = express.Router()
const userController = require('../Controllers/parcelController')

router.post('/', userController.createParcel)
router.get('/', userController.getParcels)
router.get('/:id', userController.getAParcel)
router.put('/:id', userController.updateParcel)
router.delete('/:id/cancel', userController.deleteParcel)

module.exports = router