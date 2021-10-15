var express = require('express');
var router = express.Router();

const settingController = require('../app/controllers/SettingController');

router.get('/:slug', settingController.show);
router.get('/', settingController.index);

module.exports = router;