import React from 'react';
import ProductCardClient from '../molecules/ProductCardClient';

const ProductListClient = ({ products, onViewProductDetails }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Artículos</h1>
      <div className="grid grid-cols-4 gap-4">
        {products && products.map(product => (
          <ProductCardClient 
            key={product.id} 
            product={product} 
            onViewDetails={onViewProductDetails} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListClient;
