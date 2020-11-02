const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.get('/category', categoryController.viewCategory)
router.post('/category', categoryController.addCategory)

module.exports = router