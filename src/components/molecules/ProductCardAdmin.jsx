import React from 'react';

const ProductCardAdmin = ({ product, onEdit, onDelete }) => {
    return (
        <div className="border p-4 rounded-lg">
            <img src={URL.createObjectURL(product.imagen)} alt={product.nombre} className="w-full h-32 object-cover" />
            <h3 className="text-xl font-bold">{product.nombre}</h3>
            <p>{product.categoria}</p>
            <p>${product.precio}</p>
            <div className="flex justify-between">
                <button onClick={() => onEdit(product)}>Modificar producto</button>
                <button onClick={() => onDelete(product.id)}>Eliminar artículo</button>
            </div>
        </div>
    );
};

export default ProductCardAdmin;
