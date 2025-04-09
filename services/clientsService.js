const connection = require('../config/bdd');

function getAllClients() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clients', (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getClientById(clientId) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clients WHERE id = ?', [clientId], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
}

function getClientsByReservationId(reservationId) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clients INNER JOIN reservations ON reservations.id_client = clients.id_client  WHERE id_reservation = ?', [reservationId], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

function getClientsByReservationMonthYear(month, year) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clients WHERE MONTH(reservation_date) = ? AND YEAR(reservation_date) = ?', [month, year], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAllClients,
    getClientById,
    getClientsByReservationId,
    getClientsByReservationMonthYear
};