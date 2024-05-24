const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
});

const topicSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    comments: { type: [commentSchema], default: [] }
});

module.exports = mongoose.model('Topic', topicSchema);
