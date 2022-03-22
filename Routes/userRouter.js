const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

router.post('/', userController.createUsers)
router.get('/', userController.getUsers)
router.get('/:id', userController.getAUser)
router.put('/:id', userController.updateUsers)
router.delete('/:id/cancel', userController.deleteUsers)

module.exports = router