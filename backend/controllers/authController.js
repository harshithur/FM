
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { name, phone, role, password } = req.body;
    try {
        const user = await User.create({ name, phone, role, password });
        res.status(201).json({ message: 'User registered', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { phone, password } = req.body;
    try {
        const user = await User.findOne({ phone });
        if(!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({ message: 'Wrong password' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
