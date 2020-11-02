const Category = require('../models/Category')

const viewCategory = async(req, res) => {
    try {
        const category = await Category.find({})
        res.render('admin/category/view_category', { category })
    } catch (error) {
        res.redirect('/admin/category')
    }
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