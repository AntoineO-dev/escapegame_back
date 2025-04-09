const connection = require('../config/bdd');

function getAllPayments() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM payments';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getPaymentById(paymentId) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM payments WHERE id_payment = ?';
        connection.query(sql, [paymentId], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getPaymentBymethod(paymentMethod) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM payments WHERE payment_method = ?';
        connection.query(sql, [paymentMethod], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getPaymentsAboveAmount(amount) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM payments WHERE amount > ?';
        connection.query(sql, [amount], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getPaymentsBelowAmount(amount) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM payments WHERE amount < ?';
        connection.query(sql, [amount], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getTotalPaymentsByMonthAndYear(month, year) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT SUM(amount) AS total_amount FROM payments WHERE MONTH(payment_date) = ? AND YEAR(payment_date) = ?';
        connection.query(sql, [month, year], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

module.exports = {
    getAllPayments,
    getPaymentById,
    getPaymentBymethod,
    getPaymentsAboveAmount,
    getPaymentsBelowAmount,
    getTotalPaymentsByMonthAndYear,
};