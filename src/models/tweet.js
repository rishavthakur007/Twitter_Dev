const mongoose= require('mongoose');
// schema -- blueprint
const tweetschema =new mongoose.Schema({
    content: {
        type:String,
        max: [250, 'Tweet cannot be more than 250 characters'],
        required:true,
    },
    
    
},{timestamps: true});


// model -- actual instances using which we connect to database.
const Tweet = mongoose.model('Tweet', tweetschema);
module.exports =Tweet;