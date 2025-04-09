const connection = require('../config/bdd');

function getAllEscapeGames() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM escape_games';
        connection.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

function getEscapeGameById(id) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM escape_games WHERE id_escape = ?';
        connection.query(sql, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results[0]);
        });
    });
}

function getEscapeGameByType(type) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM escape_games WHERE escape_type = ?';
        connection.query(sql, [type], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

function getEscapeGameByDisponibility(disponibility) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM escape_games WHERE disponibility = ?';
        connection.query(sql, [disponibility], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

function  getEscapeGameByNumberOfPlayers(Number_of_players) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM escape_games WHERE Number_of_players = ?';
        connection.query(sql, [Number_of_players], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

function getEscapeGameByPrice(price) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM escape_games WHERE price = ?';
        connection.query(sql, [price], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

function getEscapeGameByStatus(status) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM escape_games WHERE status = ?';
        connection.query(sql, [status], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}



module.exports = {
    getAllEscapeGames,
    getEscapeGameById,
    getEscapeGameByType,
    getEscapeGameByDisponibility,
    getEscapeGameByNumberOfPlayers,
    getEscapeGameByPrice,
    getEscapeGameByStatus,
    
    
};