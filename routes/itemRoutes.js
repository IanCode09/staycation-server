const router = require('express').Router()
const itemController = require('../controllers/itemController')

router.get('/item', itemController.viewItem)

module.exports = router