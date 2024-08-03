import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => (
    <nav className="fade-in">
        <Link to="/events">Events</Link>
        <button onClick={onLogout}>Logout</button>
    </nav>
);

export default Navbar;
