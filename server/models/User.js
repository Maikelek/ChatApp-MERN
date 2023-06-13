const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 5,
        max: 25,
        unique: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
        min: 7
    },

    profilePicture:{
        type: String,
        default: ""
    },

    coverPicture:{
        type: String,
        default: ""
    },

    followers:{
        type: Array,
        default: []
    },

    followings:{
        type: Array,
        default: []
    },
},
    {timestamps: true},
    { collection: 'ritolezec' }
)

module.exports = mongoose.model("User", UserSchema);