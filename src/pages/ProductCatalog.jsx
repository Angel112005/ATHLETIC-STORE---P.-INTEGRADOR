

import React from 'react';
import Header from '../components/organisms/Header';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

function ProductCatalog() {
  const { products } = useProductContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Header 
        title="CATÁLOGO DE ARTÍCULOS" 
        logoSrc="/LOGO_BLACK.jpeg" 
        className="bg-white"
        onHomeClick={() => navigate('/')}
      />
      <div className="container mx-auto p-8">
        {/* <h2 className="text-3xl mb-4 text-center font-extrabold text-yellow-500">CATÁLOGO DE ARTÍCULOS</h2> */}
        <div className="grid grid-cols-4 gap-4">
          {products && products.map(product => (
            <div key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer p-4 border rounded-lg text-center bg-white hover:bg-gray-200 w-60">
              <img src={product.imagen} alt={product.nombre} className="w-48 h-auto mx-auto mb-2" />
              <h3 className="text-xl font-bold">{product.nombre}</h3>
              <p>{product.categoria}</p>
              <p>${product.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;
