const mongoose  = require('mongoose');
 
module.exports = () => {
    return mongoose.connect("mongodb+srv://mac:mac@cluster0.fznpg.mongodb.net/?retryWrites=true&w=majority")
}