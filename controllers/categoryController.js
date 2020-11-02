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

const editCategory = async(req, res) => {
    try {
        const { id, name } = req.body
        const category = await Category.findOne({ _id: id })
        category.name = name
        await category.save()
        res.redirect('/admin/category')
    } catch (error) {
        console.log(error)
    }
}

const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findOne({ _id: id })
        await category.remove()
        res.redirect('/admin/category')
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    viewCategory,
    addCategory,
    editCategory,
    deleteCategory
}