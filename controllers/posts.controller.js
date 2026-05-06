
const { getDb } = require('../config/db');
const { createPost } = require('../models/postModel');

module.exports = {
    createPost: async (req, res) => {
        const { authorId, username, content } = req.body;

        try {
            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            if (!authorId || !username || !content) {
                return res.status(400).json({ message: "authorId, username, and content are required" });
            }

            const imageUrl = `/images/${req.file.filename}`;
            const imagePath = req.file.path;

            const postData = {
                authorId,
                username,
                content,
                imageUrl
            };

            const post = createPost(postData);

            const db = getDb();
            if (!db) {
                return res.status(500).json({ message: "Database connection not available" });
            }

            await db.collection('posts').insertOne(post);

            res.status(201).json({
                message: "Post created successfully",
                post,
                imagePath
            });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}