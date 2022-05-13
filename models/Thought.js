const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

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
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

// Virtual to get length of reaction array (number of reactions stored within this thought):
thoughtSchema.virtual("reactionCount").get(() => { // TEST this as arrow function was own choice.
    return this.reactions.length;
})

// Need a getter to format the date. 
// Need a virtual called reactionCount that retrieves the length of the thoughts reactions array. 

const Thought = model('thought', thoughtSchema);

module.exports = Thought;