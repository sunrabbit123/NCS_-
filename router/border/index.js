const express = require('express');

const router = express.Router();


// 게시판 보기
router.get('/', async(_, res) =>{
    
});

// 게시판 생성창
router.get('/add', async(_, res) => {
    res.render('add_border');
});

// 게시판 읽기 창
router.get('/read', async(req, res)=> {
    
});

module.exports = router;
