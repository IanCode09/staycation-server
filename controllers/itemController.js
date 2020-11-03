const Item = require('../models/Item')
const Category = require('../models/Category')
const Image = require('../models/Image')

const viewItem = async(req, res) => {
    try {
        const item = await Item.find({})
            .populate({ path: 'imageId', select: 'id imageUrl' })
            .populate({ path: 'categoryId', select: 'id name'})

        const category = await Category.find({})
        const alertMessage = req.flash('alertMessage')
        const alertStatus = req.flash('alertStatus')
        const alert = {
            message: alertMessage,
            status: alertStatus,
        }

        res.render('admin/item/view_item', {
            item,
            category,
            alert,
            action: 'view',
            title: "Staycation | Item"
        })
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/item')
    }
}

const addItem = async(req, res) => {
    try {
        const { categoryId, title, price, city, about} = req.body
        console.log(categoryId)
        if(req.files.length > 0) {
            const category = await Category.findOne({ _id: categoryId })
            const newItem = {
                categoryId,
                title,
                description: about,
                price, 
                city
            }
            
           const item = await Item.create(newItem);
           category.itemId.push({ _id: item.id });
           await category.save();
           for (let i = 0; i < req.files.length; i++) {
             const imageSave = await Image.create({ imageUrl: `images/${req.files[i].filename}` });
             item.imageId.push({ _id: imageSave._id });
             await item.save();
           }
            req.flash('alertMessage', 'Success Add Item')
            req.flash('alertStatus', 'success')
            res.redirect('/admin/item')
        }
    } catch (error) {
        console.log(error);
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/item')
    }
}

const showImageItem = async(req, res) => {
    try {
        const { id } = req.params
        const item = await Item.findOne({ _id: id}).populate({ path: 'imageId', select: 'id imageUrl' })

        const alertMessage = req.flash('alertMessage')
        const alertStatus = req.flash('alertStatus')
        const alert = {
            message: alertMessage,
            status: alertStatus,
        }

        res.render('admin/item/view_item', {
            item,
            alert,
            action: 'show-image',
            title: "Staycation | Item"
        })
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/item')
    }
}

module.exports = {
    viewItem,
    addItem,
    showImageItem
}