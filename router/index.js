const express = require('express');

const router = express.Router();

router.use('/border', require('./border'));

router.get('/', async (req, res) => {
    posts = {
        posts: [{
            mini_title : '대충 챕터 1',
            id : 1,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 2,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 3,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 4,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            mini_title: '대충 챕터 하나 더 추가',
            id : 5,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 6,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 7,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 8,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 9,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 10,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 11,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 12,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 13,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 14,
            title: '대충 제목',
            publisher: '대충 작성자',
            created_at : '대충 작성일',
            description : '대충 내용'
        },
        {
            id : 15,
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
