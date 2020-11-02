const Booking = require('../models/Booking')

const viewBooking = (req, res) => {
    res.render('admin/booking/view_booking', {
        title: "Staycation | Booking"
    })
}

module.exports = {
    viewBooking
}