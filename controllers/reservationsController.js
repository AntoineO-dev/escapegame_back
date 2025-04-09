const reservationsService = require('../services/reservationsService');

async function getAllReservations(req, res) {
    try {
        const reservations = await reservationsService.getAllReservations();
        res.status(200).json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReservationById(req, res) {
    const reservationId = req.params.id;
    try {
        const reservation = await reservationsService.getReservationById(reservationId);
        if (reservation) {
            res.status(200).json(reservation);
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    } catch (error) {
        console.error('Error fetching reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


async function getReservationsByEscapeType(req, res) {
    const escapeType = req.params.escape_type;
    try {
        const reservations = await reservationsService.getReservationsByEscapeType(escapeType);
        res.status(200).json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReservationsByStatus(req, res) {
    const status = req.params.status;
    try {
        const reservations = await reservationsService.getReservationsByStatus(status);
        res.status(200).json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReservationsByPrice(req, res) {
    const price = req.params.price;
    try {
        const reservations = await reservationsService.getReservationsByPrice(price);
        res.status(200).json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}





module.exports = {
    getAllReservations,
    getReservationById,
    getReservationsByEscapeType,
    getReservationsByStatus,
    getReservationsByPrice,
    
};