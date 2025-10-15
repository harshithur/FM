
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
    date: Date,
    status: { type: String, enum: ['pending','confirmed','rejected'], default: 'pending' },
    paymentStatus: { type: String, enum: ['pending','paid'], default: 'pending' }
});

module.exports = mongoose.model('Booking', bookingSchema);
