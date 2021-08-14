var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.use('/', newsController.index);



module.exports = router;