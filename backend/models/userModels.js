const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: String,
        username: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            unique: true,
        },
        role: String,
    },
    { timestamps: true }
);


module.exports = mongoose.model("Users Credentials", UserSchema);