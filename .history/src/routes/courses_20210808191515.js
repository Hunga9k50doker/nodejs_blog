var express = require('express');
var router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/:slug', CourseController.show);
router.get('/', CourseController.index);



module.exports = router;