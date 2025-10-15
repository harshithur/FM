
const express = require('express');
const router = express.Router();
const { bookVehicle, getBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, bookVehicle);
router.get('/', authMiddleware, getBookings);

module.exports = router;
