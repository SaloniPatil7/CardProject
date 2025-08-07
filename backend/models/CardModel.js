const mongoose = require('mongoose')

const CardModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    }
})

const Card=mongoose.model('Card',CardModelSchema);
module.exports=Card;