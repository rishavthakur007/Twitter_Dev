const mongoose= require('mongoose');
// schema -- blueprint
const tweetschema =new mongoose.Schema({
    content: {
        type:String,
        required:true,
    },
    userEmail: {
        type: String
    },
    comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
        }
    ]
},{timestamps: true});
// model -- actual instances using which we connect to database.
const Tweet = mongoose.model('Tweet', tweetschema);
module.exports =Tweet;