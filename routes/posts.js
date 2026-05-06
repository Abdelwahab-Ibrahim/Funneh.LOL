const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const userController = require('../controllers/posts.controller');

router.post("/upload", upload.single('image'), userController.createPost);

module.exports = router;