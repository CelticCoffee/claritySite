var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/services', function(req, res) {
  res.render('services');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});



module.exports = router;
