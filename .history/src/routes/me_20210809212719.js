var express = require('express');
var router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', meController.stro);
router.get('/', meController.index);

module.exports = router;