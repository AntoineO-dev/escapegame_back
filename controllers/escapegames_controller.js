const escapegamesService = require('../services/escapegames_service');

async function getAllEscapeGames(req, res) {
    try {
        const escapeGames = await escapegamesService.getAllEscapeGames();
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error('Error fetching escape games:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getEscapeGameById(req, res) {
    const { id } = req.params;
    try {
        const escapeGame = await escapegamesService.getEscapeGameById(id);
        if (!escapeGame) {
            return res.status(404).json({ error: 'Escape game not found' });
        }
        res.status(200).json(escapeGame);
    } catch (error) {
        console.error('Error fetching escape game:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getEscapeGameByType(req, res) {
    const { type } = req.params;
    try {
        const escapeGames = await escapegamesService.getEscapeGameByType(type);
        if (!escapeGames || escapeGames.length === 0) {
            return res.status(404).json({ error: 'No escape games found for this type' });
        }
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error('Error fetching escape games by type:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getEscapeGameByDisponibility(req, res) {
    const { disponibility } = req.params;
    try {
        const escapeGames = await escapegamesService.getEscapeGameByDisponibility(disponibility);
        if (!escapeGames || escapeGames.length === 0) {
            return res.status(404).json({ error: 'No escape games found for this disponibility' });
        }
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error('Error fetching escape games by disponibility:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getEscapeGameByNumberOfPlayers(req, res) {
    const { Number_of_players } = req.params;
    try {
        const escapeGames = await escapegamesService.getEscapeGameByNumberOfPlayers(Number_of_players);
        if (!escapeGames || escapeGames.length === 0) {
            return res.status(404).json({ error: 'No escape games found for this number of players' });
        }
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error('Error fetching escape games by number of players:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getEscapeGameByPrice(req, res) {
    const { price } = req.params;
    try {
        const escapeGames = await escapegamesService.getEscapeGameByPrice(price);
        if (!escapeGames || escapeGames.length === 0) {
            return res.status(404).json({ error: 'No escape games found for this price' });
        }
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error('Error fetching escape games by price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getEscapeGameByStatus(req, res) {
    const { status } = req.params;
    try {
        const escapeGames = await escapegamesService.getEscapeGameByStatus(status);
        if (!escapeGames || escapeGames.length === 0) {
            return res.status(404).json({ error: 'No escape games found for this status' });
        }
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error('Error fetching escape games by status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createEscapeGame(req, res) {
    const newEscapeGame = req.body;
    try {
        const createdEscapeGame = await escapegamesService.createEscapeGame(newEscapeGame);
        res.status(201).json(createdEscapeGame);
    } catch (error) {
        console.error('Error creating escape game:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function updateEscapeGame(req, res) {
    const { id } = req.params;
    const updatedEscapeGame = req.body;
    try {
        const escapeGame = await escapegamesService.updateEscapeGame(id, updatedEscapeGame);
        if (!escapeGame) {
            return res.status(404).json({ error: 'Escape game not found' });
        }
        res.status(200).json(escapeGame);
    } catch (error) {
        console.error('Error updating escape game:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function deleteEscapeGame(req, res) {
    const { id } = req.params;
    try {
        const deleted = await escapegamesService.deleteEscapeGame(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Escape game not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting escape game:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

    


module.exports = {
    getAllEscapeGames,
    getEscapeGameById,
    getEscapeGameByType,
    getEscapeGameByDisponibility,
    getEscapeGameByNumberOfPlayers,
    getEscapeGameByPrice,
    getEscapeGameByStatus,
    createEscapeGame,
    updateEscapeGame,
    deleteEscapeGame,
};