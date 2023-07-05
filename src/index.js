const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const Tweetrepo= require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();

app.listen(3000,async () =>{
    console.log("server started");
    await connect();
    console.log("mongo db connected");
    // const tweet = await Tweet.create({
    //     content: 'second tweet',
    //     //userEmail: 'a@b.com'
    // }); 
    const tweetrepo = new Tweetrepo();
    // const tweet = await tweetrepo.create({ content: 'my tweet with comment Schema-2 ' });
    // console.log(tweet);
    // const tweet = await tweetrepo.update('64a4594875d8c90c7cffa81f',{content: 'tweet updated'});
    // tweet.comments.push({ content:'my second comment' });
    // const comment = await Comment.create({ content: 'new Comment-2'});
    // tweet.comments.push(comment);
    // await tweet.save();
    const tweet = await tweetrepo.getall(0,3);
    console.log(tweet[0].contentWithEmail);
});