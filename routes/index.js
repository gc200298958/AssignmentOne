var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Portfolio Site',
    message: 'This is my online portfolio site'   });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact Info'
  });
});
router.get('/aboutme', function(req, res, next) {
    res.render('aboutme', {
    title: 'About Me'
  });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', {
    title: 'Projects'
  });
});
router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Services'
  });
});

module.exports = router;
