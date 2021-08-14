var express = require('express');
var router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/me', meController.search);
router.get('/', meController.index);

module.exports = router;