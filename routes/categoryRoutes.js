const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.get('/category', categoryController.viewCategory)
router.post('/category', categoryController.addCategory)
router.put('/category', categoryController.editCategory)

module.exports = router