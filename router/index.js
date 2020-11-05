const express = require('express');

const router = express.Router();
router.use('/border', require('./border'));

router.get('/',async (_, res) => {
    res.render('index');
});

module.exports = router;
