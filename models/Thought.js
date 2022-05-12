const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            // Array of nested documents created with the reaction schema.
            // Need a virtual called reactionCount that retrieves the length of the thoughts reactions array. 
        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Need a getter to format the date. 

const Thought = model('thought', thoughtSchema);

module.exports = Thought;