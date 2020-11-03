const router = require('express').Router()
const bankController = require('../controllers/bankController')
const { upload } = require('../middlewares/multer')

router.get('/bank', bankController.viewBank)
router.post('/bank', upload, bankController.addBank)
router.put('/bank', upload, bankController.editBank)

module.exports = router