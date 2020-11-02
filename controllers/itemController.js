const Item = require('../models/Item')

const viewItem = (req, res) => {
    res.render('admin/item/view_item')
}

module.exports = {
    viewItem
}