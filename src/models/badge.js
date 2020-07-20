const mongoose = require('mongoose');
const { Schema } = mongoose;

const badgeSchema = new Schema({
    firstName : { type: String, required: true},
    lastName : {type: String, required: true},
    jobTitle : {type: String, required: true},
    twitter : {type: String, required: true},
    email : {type: String, required: true},
    avatarUrl : {type: String, required: true}
});



module.exports = mongoose.model('Badge',badgeSchema);