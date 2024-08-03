const Session = require('../models/Session');

const getSessions = async (req, res) => {
    const userId = req.user.id;

    try {
        const sessions = await Session.find({ userId });
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getSessions };
