import mongoose from "mongoose";

const commentschema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
    }
},{timestamps: true});

const Comment = mongoose.model('Comment',commentschema);
export default Comment;