const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.use('/border', require('./border'));

router.get('/', async (req, res) => {
    const posts = { posts : await Post.findAll()};
    res.render('index', posts);
});

router.get('/copyright', async(_, res) => {
    res.render('LICENSE');
});
module.exports = router;
