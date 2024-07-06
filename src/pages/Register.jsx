// src/pages/Register.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl mb-4 text-center font-bold">REGISTRARSE</h2>
                <h3 className="text-xl mb-4 text-center">Datos personales</h3>
                <form className="flex flex-col space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Nombre(s):</span>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Apellidos:</span>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Teléfono:</span>
                        <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">E-mail:</span>
                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
                    {/* <h3 className="text-xl mb-4 text-center">Dirección</h3> */}
                    <div className="flex justify-between mt-6">
                        <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-yellow-500 hover:text-black">Registrarse</button>
                        <button type="button" onClick={() => navigate('/')} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-600">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
