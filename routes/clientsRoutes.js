const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

//GET /clients
router.get('/', clientsController.getAllClients);

//GET /clients/reservation/:id_reservation
router.get('/reservation/:id_reservation', clientsController.getClientsByReservationId);


//GET /clients/reservation/month/:month/year/:year
router.get('/reservation/month/:month/year/:year', clientsController.getClientsByReservationMonthYear);

//GET /clients/:id
router.get('/:id', clientsController.getClientById);

module.exports = router;

