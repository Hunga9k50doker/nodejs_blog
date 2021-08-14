var express = require('express');
var router = express.Router();

const Controller = require('../app/controllers/Controller');

router.use('/:slug', Controller.show);
router.use('/', Controller.index);



module.exports = router;