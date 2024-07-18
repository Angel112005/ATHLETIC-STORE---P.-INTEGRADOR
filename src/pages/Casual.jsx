// src/pages/Casual.jsx
// import React from 'react';
import Header from '../components/organisms/Header';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import ProductCardClient from '../components/molecules/ProductCardClient';

function Casual() {
    const { getProductsByCategory } = useProductContext();
    const navigate = useNavigate();
    const products = getProductsByCategory('Casual');

    return (
        <div className="min-h-screen bg-black">
            <Header 
                title="ATHLETIC_STORE" 
                logoSrc="/LOGO_BLACK.jpeg"
                className="bg-white"
                homeIconSrc="/path/to/home_icon.png"
                onHomeClick={()=>navigate("/")}
            />
            <div className="p-8 text-white">
                <h2 className="text-3xl mb-4">Casual</h2>
                <p>Bienvenido a la categoría de Casual. Aquí encontrarás productos ideales para el uso diario.</p>
                <div className="grid grid-cols-3 gap-4 ">
                    {products.map(product => (
                        <ProductCardClient key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Casual;
