const express = require('express');

const router = express.Router();


//로그인 시도
router.post('/', async(req, res) =>{
    res.redirect('http://127.0.0.1/');
});

// 로그인 페이지 진입
router.get('/login',async (_, res) => {

    res.render('login');
});

//회원가입 성공
router.post('login', async (req, res) => {
    
    res.render('login')
});

//회원가입 페이지 진입
router.get('/SignIn', async (_, res) =>{
    res.render('SignIn');
});

module.exports = router;
