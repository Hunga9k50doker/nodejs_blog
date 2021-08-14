var express = require('express');
var router = express.Router();

const SiteController = require('../app/controllers/SiteController');

router.use('/:slug', siteController.show);
router.use('/', siteController.index);



module.exports = router;