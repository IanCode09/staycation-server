const Category = require('../models/Category')

const viewCategory = (req, res) => {
    res.render('admin/category/view_category')
}

const addCategory = async(req, res) => {
    try {
        const { name } = req.body
        await Category.create({ name })
        res.redirect('/admin/category')
    } catch (error) {
        console.log(`error: ${error}`)
    }
}


module.exports = {
    viewCategory,
    addCategory
}