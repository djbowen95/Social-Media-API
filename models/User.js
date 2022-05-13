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
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thoughts",
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "Users",
            }
        ]
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Also need a virtual which retrieves the length of a user's friends array on query. 


const User = model('user', userSchema);

module.exports = User;