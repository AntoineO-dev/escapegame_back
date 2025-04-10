const bcrypt = require('bcryptjs');
const AuthService = require('../services/authService');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    try {
        const user = await AuthService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        res.status(200).json({ token: generateToken(user) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}

function generateToken(user) {
    return jwt.sign({ 
        id : user.id_client,
        email: user.email,
        nom: user.last_name,
        prenom: user.first_name,
        role : user.role
     }, "SECRET", {
        expiresIn: 86400 // 24 hours
    });
}

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    
    if (!token) {
        return res.status(403).json({ message: 'Aucun token fourni' });
    }

    jwt.verify(token.split(' ')[1], "SECRET", (err, decoded) => { 
        if (err) {
            return res.status(401).json({ message: 'Non autorisé' });
        }
        req.user = decoded;
        next();
    });
}

module.exports = {
    login,
    verifyToken
};