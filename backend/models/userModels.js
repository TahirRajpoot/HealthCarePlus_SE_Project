const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        Name: String,
        UserName: {
            type: String,
            unique: true,
        },
        Email: {
            type: String,
            unique: true,
        },
        Password: {
            type: String,
            unique: true,
        },
        Role: String,
    },
    { timestamps: true }
);


module.exports = mongoose.model("Users Credentials", UserSchema);