const express = require('express');
const router = express.Router();
const escapeGamesController = require('../controllers/escapegamesController');

// GET /api/escapegames
router.get('/', escapeGamesController.getAllEscapeGames);

//GET /api/escapegames/type/:type
router.get('/type/:type', escapeGamesController.getEscapeGameByType);

//GET /api/escapegames/price/:price
router.get('/price/:price', escapeGamesController.getEscapeGameByPrice);

//GET /api/escapegames/status/:status
router.get('/status/:status', escapeGamesController.getEscapeGameByStatus);

//GET /api/escapegames/available/:disponibility
router.get('/available/:disponibility', escapeGamesController.getEscapeGameByDisponibility);

// GET /api/escapegames/players/:Number_of_players
router.get('/players/:Number_of_players', escapeGamesController.getEscapeGameByNumberOfPlayers);

// GET /api/escapegames/:id
router.get('/:id', escapeGamesController.getEscapeGameById);


module.exports = router;