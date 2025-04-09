clientsService = require('../services/clientsService');

async function getAllClients(req, res) {
    try {
        const clients = await clientsService.getAllClients();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving clients', error });
    }
}

async function getClientById(req, res) {
    const clientId = req.params.id;
    try {
        const client = await clientsService.getClientById(clientId);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Client not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving client', error });
    }
}

async function getClientsByReservationId(req, res) {
    const reservationId = req.params.id_reservation;
    try {
        const clients = await clientsService.getClientsByReservationId(reservationId);
        if (clients.length > 0) {
            res.status(200).json(clients);
        } else {
            res.status(404).json({ message: 'No clients found for this reservation' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving clients', error });
    }
}

async function getClientsByReservationMonthYear(req, res) {
    const month = req.params.month;
    const year = req.params.year;
    try {
        const clients = await clientsService.getClientsByReservationMonthYear(month, year);
        if (clients.length > 0) {
            res.status(200).json(clients);
        } else {
            res.status(404).json({ message: 'No clients found for this month and year' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving clients', error });
    }
}


module.exports = {
    getAllClients,
    getClientById,
    getClientsByReservationId,
    getClientsByReservationMonthYear
};