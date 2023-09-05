const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "ID was not provided"],
    },
    name: {
        type: String,
        required: [true, "Name was not provided"],
        maxLength: 30,
    },
    price: {
        type: Number,
        required: [true, "Price was not provided"],
    },
    category: {
        type: String,
        required: [true, "Category was not provided"],
    },
    brand: {
        type: String,
        required: [true, "Brand was not provided"],
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;