const Booking = require('../models/Booking')

const viewBooking = (req, res) => {
    res.render('admin/booking/view_booking')
}

module.exports = {
    viewBooking
}