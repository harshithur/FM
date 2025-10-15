
const Booking = require('../models/Booking');
const Razorpay = require('razorpay');

exports.bookVehicle = async (req, res) => {
    try {
        const booking = await Booking.create({ ...req.body, farmer: req.user.id });
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({}).populate('farmer').populate('vehicle');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
