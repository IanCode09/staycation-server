const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb+srv://ian123:ian123@iancode09.va6uv.mongodb.net/staycation', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB Connect: ${conn.connection.host} Success`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}

module.exports = connectDB