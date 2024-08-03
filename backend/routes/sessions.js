const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

router.get('/', async (req, res) => {
    const sessions = await Session.find({ userId: req.user.id });
    res.status(200).json(sessions);
});

module.exports = router;
