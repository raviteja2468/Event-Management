import React from 'react';
import AuthForm from '../components/AuthForm';

const RegisterPage = () => {
    const handleSuccess = () => {
        window.location.href = '/events';
    };

    return (
        <div className="auth-page">

            <AuthForm isRegister={true} onSuccess={handleSuccess} />
        </div>
    );
};

export default RegisterPage;
