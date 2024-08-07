const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Post.create({ title, content, authorId: req.user.userId });
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('authorId');
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getUserPosts = async (req, res) => {
    try {
        const posts = await Post.find({ authorId: req.user.userId }).populate('authorId');
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching user posts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};