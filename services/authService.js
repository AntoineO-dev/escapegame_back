const connection = require('../config/bdd');

async function getUserByEmail(email) {
    const response = await connection.promise().query('SELECT * FROM clients WHERE email = ? ', [email]);
    return response[0][0];
}


async function createUser(user) {
    const { email, password, first_name, last_name } = user;
    const response = await connection.promise().query('INSERT INTO clients (email, password, first_name, last_name) VALUES (?, ?, ?, ?) ', [email, password, first_name, last_name]);
    return response[0].insertId;
}

module.exports = {
    getUserByEmail,
    createUser
};