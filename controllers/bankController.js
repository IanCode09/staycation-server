const Bank = require('../models/Bank')

const viewBank = (req, res) => {
    res.render('admin/bank/view_bank', {
        title: "Staycation | Bank"
    })
}


module.exports = {
    viewBank,
}