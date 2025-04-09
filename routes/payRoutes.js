const express = require('express');
const auth = require('../controllers/authController');
const payController = require('../controllers/payController');
const router = express.Router();

router.get('/',auth.verifyToken, payController.getAllPay);
router.post('/',auth.verifyToken, payController.createPay);
router.delete('/:id',auth.verifyToken, payController.deletePay);
router.patch('/:id',auth.verifyToken, payController.updatePay);

module.exports = router;

