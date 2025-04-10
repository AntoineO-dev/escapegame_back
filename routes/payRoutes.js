const express = require('express');
const servicesController = require('../controllers/payController');
const auth = require('../controllers/authController');
const router = express.Router();

router.get('/', auth.verifyToken, servicesController.getAllPay);
router.post('/', auth.verifyToken, servicesController.createPay);
router.delete('/:id', auth.verifyToken, servicesController.deletePay);
router.patch('/:id', auth.verifyToken, servicesController.updatePay);

module.exports = router;