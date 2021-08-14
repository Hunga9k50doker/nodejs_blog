var express = require('express');
var router = express.Router();

const SController = require('../app/controllers/SController');

router.use('/:slug', SController.show);
router.use('/', SController.index);



module.exports = router;