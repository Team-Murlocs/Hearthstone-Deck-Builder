var express = require('express');
var router = express.Router();

router.get('/heroes', function(req, res, next) {
    res.send('HEROES LIST');
});

module.exports = router;