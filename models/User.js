const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            validate: [isEmail, "Invalid email"], // May need testing.            
        },
        thoughts: { // Array of _id values referencing the Thought model (?)

        },
        friends: { // Array of _id values referencing the User model (self reference)
            // Also need a virtual which retrieves the length of a user's friends array on query. 
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