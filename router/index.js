const express = require('express');

const router = express.Router();
router.use('/acc', require('./account'));

router.get('/',async (_, res) => {
    res.render('index');
});

module.exports = router;
