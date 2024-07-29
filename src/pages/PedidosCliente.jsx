
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import { useAuth } from '../context/AuthContext';

const PedidosCliente = () => {
  const [orders, setOrders] = useState([]);
  const { authToken, clientId, logout } = useAuth();
  const navigate = useNavigate();
  const isLoggedIn = !!authToken;

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/Pedidos`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('authToken'),
          },
        });

        if (response.ok) {
          const data = await response.json();
          const clientOrders = data.filter(order => order.Id_Cliente === clientId);
          
          // Fetch order details for each order
          const orderDetailsPromises = clientOrders.map(order =>
            fetch(`https://athleticstoreapi.integrador.xyz/api/Detalle_pedidos`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('authToken'),
              },
            })
            .then(response => response.json())
            .then(details => ({ ...order, Detalles: details.filter(detail => detail.Id_Pedido === order.Id_Pedido) }))
          );

          const ordersWithDetails = await Promise.all(orderDetailsPromises);
          setOrders(ordersWithDetails);
        } else {
          const errorData = await response.json();
          console.error('Error al cargar los pedidos:', errorData);
        }
      } catch (error) {
        console.error('Error al cargar los pedidos:', error);
      }
    };

    if (authToken) {
      loadOrders();
    }
  }, [authToken, clientId]);

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black">
      <Header
        title="PEDIDOS REALIZADOS - CLIENTE"
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        onHomeClick={() => navigate('/')}
        isLoggedIn={isLoggedIn}
        onLogoutClick={handleLogoutClick}
      />
      <div className="container mx-auto p-8">
        {orders.map(order => (
          <div key={order.Id_Pedido} className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-bold">Pedido ID: {order.Id_Pedido}</h3>
            <p>Fecha: {order.Fecha}</p>
            <p>Total: ${order.Total}</p>
            <p>Estatus: {order.Estatus}</p>
            <table className="w-full text-left mt-4">
              <thead>
                <tr>
                  <th className="border p-2 text-center">IMAGEN</th>
                  <th className="border p-2 text-center">MODELO</th>
                  <th className="border p-2 text-center">TALLA</th>
                  <th className="border p-2 text-center">CANTIDAD</th>
                  <th className="border p-2 text-center">SUB-TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {order.Detalles && order.Detalles.map(detalle => (
                  <tr key={detalle.Id_Detalle} className="border">
                    <td className="border p-2 flex justify-center items-center"><img src={`https://athleticstoreapi.integrador.xyz/${detalle.Imagen}`} alt={detalle.Nombre_modelo} className="w-20 h-auto rounded-full" /></td>
                    <td className="border p-2 text-center">{detalle.Nombre_modelo}</td>
                    <td className="border p-2 text-center">{detalle.Talla}</td>
                    <td className="border p-2 text-center">{detalle.Cantidad}</td>
                    <td className="border p-2 text-center">${detalle.Subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PedidosCliente;
