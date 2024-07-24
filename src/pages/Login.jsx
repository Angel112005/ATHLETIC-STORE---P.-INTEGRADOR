


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
// import Header from '../organisms/Header';
// import LoginForm from '../organisms/LoginForm';
// import LoginForm from '../components/organisms/LoginForm';
import LoginForm from '../components/organisms/LoginForm';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    console.log('Login:', credentials);
    // Handle login logic here
  };

  return (
    <div>
      <Header 
        title="ATHLETIC_STORE" 
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        homeIconSrc="/path/to/home_icon.png"
        onHomeClick={() => navigate("/")}
      />
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>
          <LoginForm onSubmit={handleLogin} onCancel={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
}
