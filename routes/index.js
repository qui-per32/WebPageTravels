var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebPageTravels' });
});

router.get('/howWeAre', function (req, res, next) {
  res.render('index', {title: 'how are you'});
});

module.exports = router;
