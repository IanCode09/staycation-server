const router = require('express').Router()
const bookingController = require('../controllers/bookingController')

router.get('/booking', bookingController.viewBooking)

module.exports = router