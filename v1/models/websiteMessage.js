let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let WebsiteMessageSchema = new Schema({
    phone_number: String,
    email: String,
    message: String,
    full_name: String
});

module.exports = mongoose.model('WebsiteMessage', WebsiteMessageSchema);
