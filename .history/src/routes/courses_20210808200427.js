var express = require('express');
var router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/:slug', CourseController.show);

router.get('/:slug', CourseController.show);



module.exports = router;