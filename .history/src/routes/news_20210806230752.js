var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.index);
router.use('/', newsController.index);



module.exports = router;