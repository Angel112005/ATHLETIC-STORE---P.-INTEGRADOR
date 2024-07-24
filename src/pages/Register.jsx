

import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/organisms/RegisterForm';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    console.log('Register:', formData);
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4 text-center font-bold">REGISTRARSE</h2>
        <h3 className="text-xl mb-4 text-center">Datos personales</h3>
        <RegisterForm onSubmit={handleRegister} onCancel={() => navigate('/')} />
      </div>
    </div>
  );
}
