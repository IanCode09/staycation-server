const router = require('express').Router()
const itemController = require('../controllers/itemController')
const { uploadMultiple } = require('../middlewares/multer')

router.get('/item', itemController.viewItem)
router.post('/item', uploadMultiple, itemController.addItem)
router.get('/item/show-image/:id', itemController.showImageItem)
router.get('/item/:id', itemController.showEditItem)
router.put('/item/:id', uploadMultiple, itemController.editItem)
router.delete('/item/:id/delete', itemController.deleteItem)

router.get('/item/show-detail-item/:itemId', itemController.detailItem)

module.exports = router