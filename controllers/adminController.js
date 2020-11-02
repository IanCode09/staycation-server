module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view_dashboard')
    },
    
    viewItem: (req, res) => {
        res.render('admin/item/view_item')
    },
    viewBooking: (req, res) => {
        res.render('admin/booking/view_booking')
    }
}