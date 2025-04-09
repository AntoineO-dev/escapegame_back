const payService = require('../services/payService');

async function getAllPay(req, res) {
    try {
        const pays = await payService.getAllPay();
        res.status(200).json(pays);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function createPay(req, res) {
    try {
        const { id_user, id_product, amount } = req.body;
        const newPay = await payService.createPay(id_user, id_product, amount);
        res.status(201).json(newPay);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deletePay(req, res) {
    try {
        const { id } = req.params;
        await payService.deletePay(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updatePay(req, res) {
    try {
        const { id } = req.params;
        const { id_user, id_product, amount } = req.body;
        const updatedPay = await payService.updatePay(id, id_user, id_product, amount);
        res.status(200).json(updatedPay);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllPay,
    createPay,
    deletePay,
    updatePay
};