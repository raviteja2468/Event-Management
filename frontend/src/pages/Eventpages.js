import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import Navbar from '../components/Navbar';

const EventPages = () => {
    const [events, setEvents] = useState([]);
    const [currentEvent, setCurrentEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/events', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setEvents(response.data);
            } catch (error) {
                console.error('Failed to fetch events', error);
            }
        };

        fetchEvents();
    }, []);

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('/events', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setEvents(response.data);
            setCurrentEvent(null);
        } catch (error) {
            console.error('Failed to update events list', error);
        }
    };

    const handleEdit = (event) => {
        setCurrentEvent(event);
    };

    const handleDelete = (id) => {
        setEvents(events.filter((event) => event._id !== id));
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <div>
            <Navbar onLogout={handleLogout} />
            <EventForm event={currentEvent} onSave={handleSave} />
            <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default EventPages;
