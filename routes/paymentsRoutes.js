const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');


//GET /payments
router.get('/', paymentsController.getAllPayments);

//GET /payments/:payment_method
router.get('/:payment_method', paymentsController.getPaymentBymethod);

//GET /payments/above/:amount
router.get('/above/:amount', paymentsController.getPaymentsAboveAmount);

//GET /payments/below/:amount
router.get('/below/:amount', paymentsController.getPaymentsBelowAmount);

//GET /payments/total/month/:month/year/:year
router.get('/total/month/:month/year/:year', paymentsController.getTotalPaymentsByMonthAndYear);

//GET /payments/:id
router.get('/:id', paymentsController.getPaymentById);


module.exports = router;