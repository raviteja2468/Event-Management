import React from 'react';
import axios from 'axios';

const EventList = ({ events, onEdit, onDelete }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/events/${id}`);
            onDelete(id);
        } catch (error) {
            console.error('Failed to delete event', error);
        }
    };

    return (
        <div>
            <h2>Events</h2>
            <ul className="fade-in">
                {events.map((event) => (
                    <li key={event._id}>
                        <h3>{event.name}</h3>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                        <p>{event.description}</p>
                        <button onClick={() => onEdit(event)}>Edit</button>
                        <button onClick={() => handleDelete(event._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
