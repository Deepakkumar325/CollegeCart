const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    user: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Product_Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    Options: {
        type: String,
        required: true,
        default:"SELL"
    },
    Owner_Name: {
        type: String,
        required: true
    },
    College: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    }, 
    Instagram: {
        type: String
    },
    Address: {
        type: String,
        required: true
    },
    Amount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product