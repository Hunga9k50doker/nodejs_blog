var express = require('express');
var router = express.Router();

const ewsController = require('../app/controllers/ewsController');

router.get('/:slug', ewsController.show);
router.get('/', ewsController.index);



module.exports = router;