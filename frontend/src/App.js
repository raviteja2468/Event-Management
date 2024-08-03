import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EventPages from './pages/Eventpages';
import EventList from './components/EventList';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={isAuthenticated ? <Navigate to="/events" /> : <Navigate to="/login" />} /> */}
                <Route path='/events'element={<EventList />}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="/events" element={isAuthenticated ? <EventPages /> : <Navigate to="/login" />} /> */}
                <Route path='/EventPages'  element={<EventPages />}/>
            </Routes>
        </Router>
    );
};

export default App;
