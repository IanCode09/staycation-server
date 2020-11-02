const Category = require('../models/Category')

const viewCategory = async(req, res) => {
    try {
        const category = await Category.find({})
        const alertMessage = req.flash('alertMessage')
        const alertStatus = req.flash('alertStatus')
        const alert = {
            message: alertMessage,
            status: alertStatus,
        }

        res.render('admin/category/view_category', { 
            category, 
            alert,
            title: "Staycation | Category"
        })
    } catch (error) {
        res.redirect('/admin/category')
    }
}

const addCategory = async(req, res) => {
    try {
        const { name } = req.body
        await Category.create({ name })

        req.flash('alertMessage', 'Success Add Category')
        req.flash('alertStatus', 'success')

        res.redirect('/admin/category')
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/category')
    }
}

const editCategory = async(req, res) => {
    try {
        const { id, name } = req.body
        const category = await Category.findOne({ _id: id })
        category.name = name
        await category.save()

        req.flash('alertMessage', 'Success Update Category')
        req.flash('alertStatus', 'success')

        res.redirect('/admin/category')
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/category')
    }
}

const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findOne({ _id: id })
        await category.remove()

        req.flash('alertMessage', 'Success Delete Category')
        req.flash('alertStatus', 'success')

        res.redirect('/admin/category')
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/category')
    }
}


module.exports = {
    viewCategory,
    addCategory,
    editCategory,
    deleteCategory
}