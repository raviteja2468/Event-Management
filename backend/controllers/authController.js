const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const supabase = require('../config/supabase');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) return res.status(400).json({ error: error.message });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, passwordHash: hashedPassword });
        await newUser.save();

        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const { user, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return res.status(400).json({ error: error.message });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { registerUser, loginUser };
