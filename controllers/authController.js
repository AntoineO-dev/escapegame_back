const bcrypt = require('bcrypt');
const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

async function login(req, res) {

    try {
        // Check if the user exists
        const user = await authService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the password with the hashed password in the database
        const isMatch = await bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Send the token to the client
        res.status(200).json({ token: generateToken(user) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

function generateToken(user) {
    return jwt.sign({
        id: user.id_client,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }
    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}

module.exports = {
    login,
    verifyToken,
};