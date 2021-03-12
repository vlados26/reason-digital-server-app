const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar_img: {
        type: String,
    },
});

module.exports = model('AuthModel', customerSchema);
