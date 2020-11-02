const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/myapp', {
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