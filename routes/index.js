var express = require('express');
var router = express.Router();
var currentTime = require('elementish');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'be-fe-ish', currentTime: currentTime});
});

module.exports = router;
