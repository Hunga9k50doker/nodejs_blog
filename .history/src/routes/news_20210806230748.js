var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/', newsController.index);
router.use('/', newsController.index);



module.exports = router;