import React from 'react';
import AuthForm from '../components/AuthForm';


const LoginPage = () => {
    const handleSuccess = () => {
        window.location.href = '/events';
    };

    return (
        <div className="auth-page">
            <AuthForm isRegister={false} onSuccess={handleSuccess} />
        </div>
    );
};

export default LoginPage;
