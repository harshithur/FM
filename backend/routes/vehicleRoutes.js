
const express = require('express');
const router = express.Router();
const { addVehicle, getVehicles } = require('../controllers/vehicleController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addVehicle);
router.get('/', getVehicles);

module.exports = router;
