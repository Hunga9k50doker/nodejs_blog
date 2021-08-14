var express = require('express');
var router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.get('/create', CourseController.create);

router.get('/:slug', CourseController.show);



module.exports = router;