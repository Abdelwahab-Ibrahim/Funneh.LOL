const express = require('express');
const path = require('path');

const { connectToDb, getDb } = require("./config/db");

// Routes
const postsroute = require('./routes/posts');


// models
const { createPost } = require("./models/postModel.js");

const PORT = 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));

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




app.get('/', (req , res) => {
    res.status(200).sendFile(__dirname + '/views/404.html');
})

app.use('/', postsroute);

