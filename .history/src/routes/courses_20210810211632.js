var express = require('express');
var router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.path('/:id/restore', CourseController.restore);
router.delete('/:id', CourseController.delete);
router.get('/:slug', CourseController.show);



module.exports = router;