const express = require('express');
const { createPost, getAllPosts, getUserPosts } = require('../controllers/post');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.post('/post', authMiddleware, createPost);
router.get('/posts', getAllPosts);
router.get('/posts/user', authMiddleware, getUserPosts);

module.exports = router;