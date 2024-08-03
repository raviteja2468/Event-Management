import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventForm = ({ event, onSave }) => {
    const [name, setName] = useState(event?.name || '');
    const [date, setDate] = useState(event?.date || '');
    const [location, setLocation] = useState(event?.location || '');
    const [description, setDescription] = useState(event?.description || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (event) {
                await axios.put(`/events/${event._id}`, { name, date, location, description });
            } else {
                await axios.post('/events', { name, date, location, description });
            }
            onSave();
        } catch (error) {
            console.error('Failed to save event', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="event-form fade-in">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <button type="submit">{event ? 'Update Event' : 'Create Event'}</button>
        </form>
    );
};

export default EventForm;
