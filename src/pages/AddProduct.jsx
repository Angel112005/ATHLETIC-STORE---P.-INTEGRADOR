

import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Header from '../organisms/Header';
import Header from '../components/organisms/Header';
import AddProductForm from '../components/organisms/AddProductForm';
import { useProductContext } from '../context/ProductContext';

export default function AddProduct() {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();

  const handleAddProduct = (product) => {
    const formData = new FormData();
    formData.append('Folio_producto', product.folio);
    formData.append('Nombre_modelo', product.nombre);
    formData.append('Descripcion', product.descripcion);
    formData.append('Precio', product.precio);
    formData.append('Categoria', product.categoria);
    formData.append('Marca', product.marca);
    formData.append('Color', product.color);
    formData.append('Genero', product.genero);
    formData.append('imagen', product.imagen);

    fetch('https://athleticstoreapi.integrador.xyz/api/Productos', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar los datos a la API');
      }
      return response.json();
    })
    .then(data => {
      console.log('Producto enviado correctamente:', data);
      addProduct(product);
      navigate('/gestion');
    })
    .catch(error => {
      console.error('Error al enviar el producto:', error);
    });
  };

  return (
    <div className='min-h-screen bg-black'>
      <Header
        title="AGREGAR PRODUCTO"
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        homeIconSrc="/path/to/home_icon.png"
        onHomeClick={() => navigate('/Gestion')}
      />
      <div className="max-w-xl mx-auto p-6 bg-white rounded-md mt-8">
        <h2 className="text-2xl text-center font-bold mb-6">Agregar Producto</h2>
        <AddProductForm onSubmit={handleAddProduct} onCancel={() => navigate('/')} />
      </div>
          <p>.</p>
    </div>
  );
}
