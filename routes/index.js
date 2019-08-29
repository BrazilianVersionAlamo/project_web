var express = require('express');
var router = express.Router();
var postsService = require ('../services/postsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts{ };
  res.render('index', { title: 'A Good Blog' });
});

module.exports = router;
