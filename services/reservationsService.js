const connection = require('../config/bdd');

function getAllReservations() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getReservationById(reservationId) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE id_escape = ?', [reservationId], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}



function getReservationsByEscapeType(escapeType) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE escape_type = ?', [escapeType], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getReservationsByStatus(status) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE status = ?', [status], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getReservationsByPrice(price) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM reservations WHERE price = ?', [price], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAllReservations,
    getReservationById,
    getReservationsByEscapeType,
    getReservationsByStatus,
    getReservationsByPrice,
};