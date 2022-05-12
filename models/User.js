const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {

        },
        thoughts: {

        },
        friends: {

        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;