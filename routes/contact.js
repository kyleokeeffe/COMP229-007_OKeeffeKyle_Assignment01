var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

router.get('/submit?', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


module.exports = router;
