const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, "ID was not provided"],
    },
    name: {
        type: String,
        required: [true, "Name was not provided"],
    },
    age: {
        type: Number,
        required: [true, "Age was not provided"],
    },
    email: {
        type: String,
        required: [true, "Email was not provided"],
        unique: true,
    },
    city: {
        type: String,
        required: [true, "City was not provided"],
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
