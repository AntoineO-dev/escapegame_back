const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationsController');

//GET /reservations
router.get('/', reservationsController.getAllReservations);

//GET /reservations/type/:escape_type
router.get('/type/:escape_type', reservationsController.getReservationsByEscapeType);

//GET /reservations/status/:status
router.get('/status/:status', reservationsController.getReservationsByStatus);

//GET /reservations/price/:price
router.get('/price/:price', reservationsController.getReservationsByPrice);

//GET /reservations/:id
router.get('/:id', reservationsController.getReservationById);


module.exports = router;