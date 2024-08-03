import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ isRegister, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isRegister ? '/register' : '/login';
        try {
            const response = await axios.post(url, { email, password });
            localStorage.setItem('token', response.data.token);
            onSuccess();
        } catch (error) {
            console.error('Authentication failed', error);
        }
    };

    return (
        <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-md-6 form-container">
                <form onSubmit={handleSubmit} className="auth-form fade-in">
                    <h2>{isRegister ? 'Register' : 'Login'}</h2>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
                </form>
            </div>
        </div>
    </div>
    
    
    
    );
};

export default AuthForm;
