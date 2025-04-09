const paymentsService = require('../services/paymentsService');

async function getAllPayments(req, res) {
    try {
        const payments = await paymentsService.getAllPayments();
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getPaymentById(req, res) {
    const paymentId = req.params.id;
    try {
        const payment = await paymentsService.getPaymentById(paymentId);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getPaymentBymethod(req, res) {
    const paymentMethod = req.params.payment_method;
    try {
        const payment = await paymentsService.getPaymentBymethod(paymentMethod);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getPaymentsAboveAmount(req, res) {
    const amount = req.params.amount;
    try {
        const payments = await paymentsService.getPaymentsAboveAmount(amount);
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getPaymentsBelowAmount(req, res) {
    const amount = req.params.amount;
    try {
        const payments = await paymentsService.getPaymentsBelowAmount(amount);
        res.status(200).json(payments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getTotalPaymentsByMonthAndYear(req, res) {
    const month = req.params.month;
    const year = req.params.year;
    try {
        const totalPayments = await paymentsService.getTotalPaymentsByMonthAndYear(month, year);
        res.status(200).json(totalPayments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {
    getAllPayments,
    getPaymentById,
    getPaymentBymethod,
    getPaymentsAboveAmount,
    getPaymentsBelowAmount,
    getTotalPaymentsByMonthAndYear,
};