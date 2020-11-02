const router = require('express').Router()
const bankController = require('../controllers/bankController')
const { upload } = require('../middlewares/multer')

router.get('/bank', bankController.viewBank)
router.post('/bank', upload, bankController.addBank)

module.exports = router