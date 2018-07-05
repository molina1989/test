var express = require('express');
var router = express.Router();

/* POST TEXT . */
router.post('/', function(req, res, next) {
  var data = req.body.data;
  if (data) {
    res.json({
      data: data
    });
  }else{
    res.json({
      message: 'Please add a text.!'
    });
  }

});

module.exports = router;
