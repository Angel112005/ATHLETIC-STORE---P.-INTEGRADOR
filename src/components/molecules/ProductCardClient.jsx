

import React from 'react';

const ProductCardClient = ({ product }) => {
    return (
        <div className="border grid justify-center p-4 rounded-lg bg-white text-black w-64">
            {product.Imagen && (
                <img src={`https://athleticstoreapi.integrador.xyz/${product.Imagen}`} alt={product.Nombre_modelo} className="rounded-3xl h-48 object-contain mb-2" />
            )}
            <h3 className="text-xl font-bold">{product.Nombre_modelo}</h3>
            <p>{product.Categoria}</p>
            <p>${product.Precio}</p>
        </div>
    );
};

export default ProductCardClient;
