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
        }
    }
)

// Need a getter to format the date. 

const Thought = model('thought', thoughtSchema);

module.exports = Thought;