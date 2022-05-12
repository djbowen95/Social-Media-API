const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        }
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;