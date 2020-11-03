const router = require('express').Router()
const bankController = require('../controllers/bankController')
const { uploadSingle } = require('../middlewares/multer')

router.get('/bank', bankController.viewBank)
router.post('/bank', uploadSingle, bankController.addBank)
router.put('/bank', uploadSingle, bankController.editBank)
router.delete('/bank/:id', uploadSingle, bankController.deleteBank)

module.exports = router