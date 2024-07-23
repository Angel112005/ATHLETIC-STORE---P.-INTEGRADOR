

import React from 'react';
import { useEffect } from 'react';
import Header from '../components/organisms/Header';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

function ProductCatalog() {
  const { products, setProducts } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://athleticstoreapi.integrador.xyz/api/Productos');
        if (!response.ok) {
          throw new Error('Error al recuperar los productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al recuperar los productos:', error);
      }
    };

    fetchProducts();
  }, [setProducts]);

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
            <div key={product.Folio_producto} onClick={() => navigate(`/product/${product.Folio_producto}`)} className="cursor-pointer p-4 border rounded-lg text-center bg-white hover:bg-gray-200 w-60">
              <img src={`https://athleticstoreapi.integrador.xyz/${product.Imagen}`} alt={product.Nombre_modelo} className="w-48 h-auto mx-auto mb-2" />
              <h3 className="text-xl font-bold">{product.Nombre_modelo}</h3>
              <p>{product.Categoria}</p>
              <p>${product.Precio}</p>
              {/* <p>{product.imagen.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;
