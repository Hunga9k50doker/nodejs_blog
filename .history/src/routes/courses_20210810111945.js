var express = require('express');
var router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.de('/:id', CourseController.update);
router.get('/:slug', CourseController.show);



module.exports = router;