const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Number, // 1 = admin, 2 = regular
            required: false,
            default: 1,
        }
        // verified: {
        //     type: Boolean,
        //     required: true,
        //     default: 2,
        // },
        // user: {
        //     type: String,
        //     ref: "User",
        //     required: true,
        // },
    },
    { timestamps: true }
);

const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;