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

tweetschema.virtual('contentWithEmail').get(function process(){
    return this.content+"\nCreated by:"+this.userEmail;
})

tweetschema.pre('save',function(next){
    console.log("Inside a hook");
    this.content= this.content + " with hook";
    next();
})
// model -- actual instances using which we connect to database.
const Tweet = mongoose.model('Tweet', tweetschema);
module.exports =Tweet;