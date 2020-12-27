var express = require('express');
var router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/chat.html'))
});

module.exports = router;
