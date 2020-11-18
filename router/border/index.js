const express = require('express');
const multer = require('multer');
const posts = require('../../models/Post')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./public/image') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
  });


const upload = multer({storage : storage});

const router = express.Router();


// 게시판 생성 리다이렉트
router.post('/', upload.single('img'), async(req, res) =>{
    const { mini_title, picturePath, title, publisher, description } = req.body;
    res.json(req.file);


    
});

// 게시판 생성창
router.get('/add', async(_, res) => {
    res.render('add_border');
});

// 게시판 읽기 창
router.get('/read', async(req, res)=> {
    
});

module.exports = router;
