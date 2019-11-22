const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    currentCity: String,
    profilePhoto: {
        type: String,
        default: "https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg",
    },
    admin: {
        type: Boolean,
        default: false,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    comments: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

const User = mongoose.model("User", UserSchema);
module.exports = User;
