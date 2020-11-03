const router = require('express').Router()
const itemController = require('../controllers/itemController')
const { uploadMultiple } = require('../middlewares/multer')

router.get('/item', itemController.viewItem)
router.post('/item', uploadMultiple, itemController.addItem)
router.get('/item/show-image/:id', itemController.showImageItem)

module.exports = router