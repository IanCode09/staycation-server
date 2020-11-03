const Bank = require('../models/Bank')

const viewBank = async(req, res) => {
    try {
        const bank = await Bank.find({})
        const alertMessage = req.flash('alertMessage')
        const alertStatus = req.flash('alertStatus')
        const alert = {
            message: alertMessage,
            status: alertStatus,
        }
        res.render('admin/bank/view_bank', {
            bank,
            alert,
            title: "Staycation | Bank"
        })
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/bank')
    }
    
}

const addBank = async(req, res) => {
    try {
        const { name, nameBank, nomorRekening } = req.body
        await Bank.create({
            name,
            nameBank,
            nomorRekening,
            imageUrl: `images/${req.file.filename}`
        })
        // console.log(req.file)

        req.flash('alertMessage', 'Success Add Bank')
        req.flash('alertStatus', 'success')

        res.redirect('/admin/bank')
    } catch (error) {
        req.flash('alertMessage', `${error.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/admin/bank')
    }
}


module.exports = {
    viewBank,
    addBank
}