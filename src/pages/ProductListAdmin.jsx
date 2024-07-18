
// export default ProductListAdmin

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import ProductCardAdmin from '../components/molecules/ProductCardAdmin';
import BoxGestionAdmin from '../components/organisms/BoxGestionAdmin';
import { useProductContext } from '../context/ProductContext';

function ProductListAdmin() {
  const { products, deleteProduct } = useProductContext();
  const navigate = useNavigate();

  return (
    
    <div className='min-h-screen bg-black'>
      <Header 
        title="GESTIÓN ARTÍCULOS"
        logoSrc="/LOGO_BLACK.jpeg" 
        className="bg-white"
        onHomeClick={() => navigate("/")}
      />
      <div className="container mx-auto mt-9">
        {/* <h1 className="text-2xl font-bold mb-4 text-center">Gestión de Productos</h1> */}
        <BoxGestionAdmin onAddProductClick={() => navigate('/AgregarProducto')} />
        <div className="grid grid-cols-3 gap-11">
          {products && products.map(product => (
            <ProductCardAdmin 
              key={product.id} 
              product={product} 
              onEdit={() => navigate(`/edit/${product.id}`)} 
              onDelete={() => deleteProduct(product.id)} 
            />
          ))}
        </div>
        {/* <BoxGestionAdmin onAddProductClick={() => navigate('/AgregarProducto')} /> */}
      </div>
      </div>
    
  );
}

export default ProductListAdmin;
