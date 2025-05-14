const connection = require('../config/bdd');

async function getUserByEmail(email) {
    try {
        // Requête SQL simplifiée et correcte
        const sql = 'SELECT * FROM clients WHERE email = ?';
        const response = await connection.promise().query(sql, [email]);
        return response[0][0]; // Retourne le premier résultat ou undefined
    } catch (error) {
        console.error('Erreur dans getUserByEmail:', error);
        throw error;
    }
}


async function createUser(user) {
    try {
        const { email, password, first_name, last_name, phone, registration_date} = user;
        
        // Requête SQL incluant tous les champs
        const response = await connection.promise().query(
            'INSERT INTO clients (email, password, first_name, last_name, phone, registration_date) VALUES (?, ?, ?, ?, ?, ?)', 
            [email, password, first_name, last_name, phone, registration_date]
        );
        
        return response[0].insertId;
    } catch (error) {
        console.error('Erreur dans createUser:', error);
        throw error;
    }
}

module.exports = {
    getUserByEmail,
    createUser
};