const express = require('express');
const router = express.Router();
const escapeGamesController = require('../controllers/escapegames_controller');

// GET /api/escapegames
router.get('/', escapeGamesController.getAllEscapeGames);

//POST /api/escapegames
router.post('/', escapeGamesController.createEscapeGame);

//PATCH /api/escapegames/:id
router.patch('/:id', escapeGamesController.updateEscapeGame);

//DELETE /api/escapegames/:id
router.delete('/id', escapeGamesController.deleteEscapeGame);

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