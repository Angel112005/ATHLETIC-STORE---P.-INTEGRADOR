import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';

function AddProduct ({onSaveProduct}) {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    folio: '',
    nombre: '',
    precio: '',
    descripcion: '',
    categoria: 'futbol',
    marca: '',
    // talla: '23',
    color: '',
    genero: 'hombre',
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, imagen: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el producto al servidor o manejarlo según tu necesidad
    console.log(product);
    onSaveProduct(product);
  };

  return (
    <>
    <Header
      title="AGREGAR PRODUCTO" 
      logoSrc="/LOGO_BLACK.jpeg" 
      homeIconSrc="/path/to/home_icon.png"
      onHomeClick={() => navigate('/')}
    />
    <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-md rounded-md mt-8">
      <h2 className="text-2xl text-center font-bold mb-6">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Folio</label>
          {/* <Label className="block text-black "> Folio </Label> */}
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
            <option value="futbol">Futbol</option>
            <option value="casual">Casual</option>
            <option value="running">Running</option>
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
        {/* <div className="mb-4">
          <label className="block text-gray-700">Talla</label>
          <select
            name="talla"
            value={product.talla}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            {[...Array(7)].map((_, i) => (
              <option key={i} value={23 + i}>{23 + i}</option>
            ))}
          </select>
        </div> */}
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
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded">
          Confirmar
        </button>
      </form>
    </div>
    </>
  );
};

export default AddProduct;
