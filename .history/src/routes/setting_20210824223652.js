var express = require('express');
var router = express.Router();

const settingController = require('../app/controllers/SettingController');

router.get('/ủe', settingController.setting);
router.get('/', settingController.index);

module.exports = router;