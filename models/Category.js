const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = new mongoose.Schema({
    name: String,
    required: true
})


module.exports = mongoose.model('Category', categorySchema);
