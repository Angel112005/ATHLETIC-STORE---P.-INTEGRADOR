



// src/pages/AddProduct.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import { useProductContext } from '../context/ProductContext';

function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();

  const [product, setProduct] = useState({
    id: Date.now(),
    folio: '',
    nombre: '',
    precio: '',
    descripcion: '',
    categoria: 'Futbol',
    marca: '',
    color: '',
    genero: 'hombre',
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length) {
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setProduct({ ...product, imagen: imageUrls });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!product.nombre || !product.precio || !product.descripcion || !product.categoria || !product.imagen) {
      alert("Por favor, complete todos los campos requeridos.");
      return;
    }

    addProduct(product);
    navigate('/gestion');
    console.log(product);
  };

  return (
    <div className='min-h-screen bg-black'>
      <Header
        title="AGREGAR PRODUCTO"
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        homeIconSrc="/path/to/home_icon.png"
        onHomeClick={() => navigate('/')}
      />
      <div className="max-w-xl mx-auto p-6 bg-white rounded-md mt-8">
        <h2 className="text-2xl text-center font-bold mb-6">Agregar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Folio</label>
            <input
              type="text"
              name="folio"
              value={product.folio}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={product.nombre}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Precio</label>
            <input
              type="number"
              name="precio"
              value={product.precio}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descripción</label>
            <textarea
              name="descripcion"
              value={product.descripcion}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Categoría</label>
            <select
              name="categoria"
              value={product.categoria}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Futbol">Futbol</option>
              <option value="Casual">Casual</option>
              <option value="Running">Running</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Marca</label>
            <input
              type="text"
              name="marca"
              value={product.marca}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              name="color"
              value={product.color}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Género</label>
            <select
              name="genero"
              value={product.genero}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Imagen</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded">
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
