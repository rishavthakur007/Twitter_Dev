const mongoose= require('mongoose');
// schema -- blueprint
const tweetschema =new mongoose.Schema({
    content: {
        type:String,
        max: [250, 'Tweet cannot be more than 250 characters'],
        required:true,
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag',
        }
    ]    
    
},{timestamps: true});


// model -- actual instances using which we connect to database.
const Tweet = mongoose.model('Tweet', tweetschema);
module.exports =Tweet;