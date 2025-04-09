const connection = require('../config/bdd');

function getAllPay() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pay', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function createPay(pay) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO pay SET ?';
        connection.query(query, [pay], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.insertId);
        });
    });
}

function deletePay(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM pay WHERE id_reservation = ?';
        connection.query(query, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.affectedRows);
        });
    });
}

function updatePay(id_reservation) {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE pay SET ? WHERE id_reservation = ?';
        connection.query(query, [id_reservation], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.affectedRows);
        });
    });
}

module.exports = {
    getAllPay,
    createPay,
    deletePay,
    updatePay
};