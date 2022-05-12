const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    // username, email, thoughts, friends
    {
        username: {

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