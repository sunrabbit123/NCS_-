const express = require('express');

const router = express.Router();

router.use('/border', require('./border'));

router.get('/', async (req, res) => {
    posts = {
        posts: [{
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },


    ]
    };
    
    res.render('index', posts);
});

router.get('/copyright', async(_, res) => {
    res.render('LICENSE');
});
module.exports = router;
