var express = require('express');
var router = express.Router();
const Message = require('../models/message')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Message.find({}, (err, messages) => {
    res.send(messages);
  })
});

router.post('/', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      res.sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

module.exports = router;
