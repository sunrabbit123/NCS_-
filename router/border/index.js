const express = require('express');
const multer = require('multer');
const Post = require('../../models/Post')

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null,'public/image/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
  });


const upload = multer({storage : storage});

const router = express.Router();


// 게시판 생성 리다이렉트
router.post('/', upload.single('img'), async(req, res) =>{
    console.log(Post);
    const pst = await Post.newPost(req.body, "/image/" + String(req.file.originalname)); 
    console.log(req.body);
    console.log(req.file);
    res.redirect('/');
});

// 게시판 생성창
router.get('/add', async(_, res) => {
    res.render('add_border');
});

// 게시판 읽기 창
router.get('/read', async(req, res)=> {
    try{
    const contents = { post : await Post.findPostAt_id(req.query.id)};
    console.log(contents);
    res.render('read', contents);
    } catch (e) {
      res.status(403).json({
          error: "잘못된 경로값"
      });}

});

module.exports = router;
