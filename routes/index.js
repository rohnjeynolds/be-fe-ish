var express = require('express');
var router = express.Router();
var welcomeMessage = require('elementish');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'be-fe-ish', welcomeMessage: welcomeMessage});
});

module.exports = router;
