import { Schema, model } from 'mongoose';

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

export default model('AuthModel', customerSchema);
