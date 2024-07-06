import React from 'react';

const ProductCardClient = ({ product, onViewDetails }) => {
    return (
        <div className="border p-4 rounded-lg">
            <img src={URL.createObjectURL(product.imagen)} alt={product.nombre} className="w-full h-32 object-cover" />
            <h3 className="text-xl font-bold">{product.nombre}</h3>
            <p>{product.categoria}</p>
            <p>${product.precio}</p>
            <button onClick={() => onViewDetails(product)}>Ver detalles</button>
        </div>
    );
};

export default ProductCardClient;
