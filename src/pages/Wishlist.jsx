



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import { useWishlistContext } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import Modal from 'react-modal';

const Wishlist = () => {
  const { wishlist, updateWishlistItem, removeFromWishlist } = useWishlistContext();
  const navigate = useNavigate();
  const { authToken, logout } = useAuth();
  const isLoggedIn = !!authToken;
  const sizes = [22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5];

  const calculateTotal = () => {
    return wishlist.reduce((total, item) => total + item.Precio * item.quantity, 0);
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (item) => {
    setCurrentItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentItem(null);
    setModalIsOpen(false);
  };

  const handleSizeChange = (newSize) => {
    setCurrentItem({ ...currentItem, size: newSize });
  };

  const handleQuantityChange = (newQuantity) => {
    setCurrentItem({ ...currentItem, quantity: newQuantity });
  };

  const handleUpdate = () => {
    updateWishlistItem(currentItem);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-black">
      <Header
        title="LISTA DE DESEOS"
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        onHomeClick={() => navigate('/')}
        isLoggedIn={isLoggedIn}
        onLogoutClick={handleLogoutClick}
      />
      <div className="container mx-auto p-8">
        {/* <h2 className="text-3xl mb-4 text-center font-bold text-white">Lista de Deseos</h2> */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border p-2 text-center">IMAGEN</th>
                <th className="border p-2 text-center">MODELO</th>
                <th className="border p-2 text-center">TALLA</th>
                <th className="border p-2 text-center">CANTIDAD</th>
                <th className='border p-2 text-center' >PRECIO</th>
                <th className="border p-2 text-center">SUB-TOTAL</th>
                <th className="border p-2 text-center">- ACCIONES -</th>
              </tr>
            </thead>
            <tbody >
              {wishlist && wishlist.map(item => (
                <tr key={item.Folio_producto} className="border ">
                  <td className="border p-2 flex justify-center items-center"><img src={`https://athleticstoreapi.integrador.xyz/${item.Imagen}`} alt={item.Nombre_modelo} className="w-20 h-auto rounded-full" /></td>
                  <td className="border p-2 text-center">{item.Nombre_modelo}</td>
                  <td className="border p-2 text-center">{item.size}</td>
                  <td className="border p-2 text-center">{item.quantity}</td>
                  <td className='border p-2 text-center' >{item.Precio}</td>
                  <td className="border p-2 text-center">${item.Precio * item.quantity}</td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => openModal(item)}
                      className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.Folio_producto)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <p className="text-2xl">TOTAL: ${calculateTotal()}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded" onClick={() => alert('Pedido realizado')}>
            Realizar pedido
          </button>
        </div>
      </div>

      {currentItem && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Editar Artículo"
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Editar Artículo</h2>
            <div className="mb-4">
              <label className="block mb-1">Talla</label>
              <select
                value={currentItem.size}
                onChange={(e) => handleSizeChange(e.target.value)}
                className="border p-2 w-full rounded"
              >
                {sizes.map(sizeOption => (
                  <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Cantidad</label>
              <input
                type="number"
                value={currentItem.quantity}
                onChange={(e) => handleQuantityChange(e.target.value)}
                className="border p-2 w-full rounded"
                min="1"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleUpdate}
                className="bg-yellow-500 text-white py-2 px-4 rounded mr-2 hover:bg-yellow-600"
              >
                Confirmar
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Wishlist;
