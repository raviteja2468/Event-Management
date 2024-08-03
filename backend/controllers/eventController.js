const Event = require('../models/Event');

const createEvent = async (req, res) => {
    const { name, date, location, description } = req.body;
    const userId = req.user.id;

    try {
        const event = new Event({ name, date, location, description, userId });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getEvents = async (req, res) => {
    const userId = req.user.id;

    try {
        const events = await Event.find({ userId });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { name, date, location, description } = req.body;

    try {
        const event = await Event.findByIdAndUpdate(id, { name, date, location, description }, { new: true });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        await Event.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };
