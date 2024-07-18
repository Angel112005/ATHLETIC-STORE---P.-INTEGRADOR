
import React from 'react';

function ProductCardAdmin({ product, onEdit, onDelete }) {
  const handleEdit = () => {
    onEdit(product);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="border p-4 rounded-lg shadow-2xl bg-white mt-6 mb-5">
      <img src={product.imagen} alt={product.nombre} className="w-full h-48 object-contain mb-2" />
      <h3 className="text-xl font-bold text-center">{product.nombre}</h3>
      <p>${product.precio}</p>
      <p className=''>{product.categoria}</p>
      <p className=''>{product.marca}</p>
      <div className="flex justify-between mt-4">
        <button onClick={() => navigate ("/EditarProducto")} className="bg-black text-white py-2 px-4 rounded hover:bg-yellow-500 hover:text-black rounded-lg">
          Editar
        </button>
        <button onClick={handleDelete} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-600 rounded-lg">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ProductCardAdmin;
