
const Vehicle = require('../models/Vehicle');

exports.addVehicle = async (req, res) => {
    try {
        const vehicle = await Vehicle.create({ ...req.body, owner: req.user.id });
        res.status(201).json(vehicle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find({ available: true });
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
