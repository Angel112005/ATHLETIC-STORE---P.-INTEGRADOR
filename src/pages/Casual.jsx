// src/pages/Casual.jsx
// import React from 'react';
import Header from '../components/organisms/Header';

function Casual() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="p-8">
                <h2 className="text-3xl mb-4">Casual</h2>
                <p>Bienvenido a la categoría de Casual. Aquí encontrarás productos ideales para el uso diario.</p>
            </div>
        </div>
    );
}

export default Casual;
