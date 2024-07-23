import React, { useEffect, useState } from 'react';
import Header from '../components/organisms/Header';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import ProductCardClient from '../components/molecules/ProductCardClient';

function Running() {
    const navigate = useNavigate();
    const { products, setProducts } = useProductContext();
    const [runningProducts, setRunningProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://athleticstoreapi.integrador.xyz/api/Productos');
            if (!response.ok) {
              throw new Error('Error al recuperar los productos');
            }
            const data = await response.json();
            setProducts(data);
            setRunningProducts(data.filter(product => product.Categoria === 'Running'));
          } catch (error) {
            console.error('Error al recuperar los productos:', error);
          }
        };
    
        fetchProducts();
      }, [setProducts]);
    
    return (
        <div className="min-h-screen bg-black">
            <Header 
                title="ATHLETIC_STORE" 
                logoSrc="/LOGO_BLACK.jpeg"
                className="bg-white"
                homeIconSrc="/path/to/home_icon.png"
                onHomeClick={() => navigate("/")}
            />
            <div className="p-8 text-white">
                <h2 className="text-3xl mb-4">Running</h2>
                <p>Bienvenido a la categoría de Running. Aquí encontrarás productos ideales para correr.</p>
                <div className="grid grid-cols-3 gap-4 mt-10">
                    {runningProducts && runningProducts.map(product => (
                        <ProductCardClient key={product.Folio_producto} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Running;
