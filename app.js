const express = require('express');
const path = require('path')

const { connectToDb, getDb } = require("./config/db");


// models
const { createPost } = require("./models/postModel.js");

const PORT = 3000;

const app = express();


// connect to DB
let db;

connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
        db = getDb();
        Posts = db.collection("posts");
    }
})


const posturl = `https://i.pinimg.com/236x/77/22/37/7722375e58b6eaddd82bbde1772ab104.jpg`;
const post = {
    authorId: "user123",
    username: "random_user",
    content: "bro i just opened the fridge and forgot why 💀",
    imageUrl: posturl,
    tags: ["random", "meme", "brainlag"],
    community: "general",
    likesCount: 0,
    commentsCount: 0,
    createdAt: new Date(),
    updatedAt: new Date()
};

app.get('/', (req , res) => {
    res.status(200).sendFile(__dirname + '/views/404.html');
})

app.get('/add', async (req, res) => {
    const post = createPost(posturl);
    try {
        
        await Posts.insertOne(post);
        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong" });
    }

})


