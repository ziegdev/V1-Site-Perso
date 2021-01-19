const express = require('express');
const router = express.Router();
const promoController = require('./controller/promo');
const studentController = require('./controller/student');
const adminController = require('./controller/admin');


// on défini les routes
router.get('/', promoController.list);
router.get('/promo/:id', promoController.view);
router.get('/student/:id', studentController.view);
router.get('/students', studentController.list);
router.get('/admin/student/add', adminController.showAddStudentForm);
router.post('/admin/student/add', adminController.addStudent);

module.exports = router;