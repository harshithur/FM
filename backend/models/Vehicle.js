
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: String,
    capacity: Number,
    location: { lat: Number, lng: Number },
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
