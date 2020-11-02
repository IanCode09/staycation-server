const router = require('express').Router()
const bankController = require('../controllers/bankController')

router.get('/bank', bankController.viewBank)

module.exports = router