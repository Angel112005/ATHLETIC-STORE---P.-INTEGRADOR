// import Header from "../components/organisms/Header"
// import { useNavigate } from "react-router-dom";
// import { useAuth } from '../context/AuthContext';

// function PedidosAdmin(){
//     const navigate = useNavigate();
//     const { authToken, logout } = useAuth();
//     const isLoggedIn = !!authToken;

//     const handleLogoutClick = () => {
//         logout();
//         navigate('/');
//     };

//     return(
        
//         <div className="min-h-screen bg-black">
//             <Header 
//             title="GESTIÓN PEDIDOS" 
//             logoSrc="/LOGO_BLACK.jpeg"
//             className="bg-white" 
//             // homeIconSrc="/path/to/home_icon.png"
//             onHomeClick = {() => navigate("/HomeAdmin")}
//             isLoggedIn={isLoggedIn}
//             onLogoutClick={handleLogoutClick}
//             isAdminView={true}
//             />
//             <div className="text-white text-center mt-5">
//                 {/* <h1 className="text-2xl">HISTORIAL DE PEDIDOS</h1> */}
//             </div>

//         </div>
        
//     )
// }

// export default PedidosAdmin







import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import { useAuth } from '../context/AuthContext';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Asegura que React Modal funcione correctamente

const PedidosAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();
  const isLoggedIn = !!authToken;
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          
          // Fetch order details for each order
          const orderDetailsPromises = data.map(order =>
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
  }, [authToken]);

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  const handleRejectOrder = async (orderId) => {
    try {
      const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/Pedidos/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('authToken'),
        },
        body: JSON.stringify({
          Estatus: 'Rechazado',
        }),
      });

      if (response.ok) {
        console.log('Pedido rechazado:', await response.json());
        loadOrders();
      } else {
        const errorData = await response.json();
        console.error('Error al rechazar el pedido:', errorData);
      }
    } catch (error) {
      console.error('Error al rechazar el pedido:', error);
    }
  };

  const handleAcceptOrder = (order) => {
    setCurrentOrder(order);
    setModalIsOpen(true);
  };

  const handleUpdateOrder = async (status) => {
    try {
      const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/Pedidos/${currentOrder.Id_Pedido}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('authToken'),
        },
        body: JSON.stringify({
          Estatus: status,
        }),
      });

      if (response.ok) {
        console.log('Pedido actualizado:', await response.json());
        setModalIsOpen(false);
        loadOrders();
      } else {
        const errorData = await response.json();
        console.error('Error al actualizar el pedido:', errorData);
      }
    } catch (error) {
      console.error('Error al actualizar el pedido:', error);
    }
  };

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
        
        // Fetch order details for each order
        const orderDetailsPromises = data.map(order =>
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

  return (
    <div className="min-h-screen bg-black">
      <Header
        title="GESTIÓN PEDIDOS"
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        onHomeClick={() => navigate('/HomeAdmin')}
        isLoggedIn={isLoggedIn}
        onLogoutClick={handleLogoutClick}
        isAdminView={true}
      />
      <div className="container mx-auto p-8">
        {orders.map(order => (
          <div key={order.Id_Pedido} className="bg-white p-4 rounded-lg shadow-lg mb-4">
            <h3 className="text-xl font-bold">Pedido ID: {order.Id_Pedido}</h3>
            <p>ID Cliente: {order.Id_Cliente}</p>
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
            <div className="flex justify-end mt-4">
              <button onClick={() => handleAcceptOrder(order)} className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600">Aceptar</button>
              <button onClick={() => handleRejectOrder(order.Id_Pedido)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Rechazar</button>
            </div>
          </div>
        ))}
      </div>

      {currentOrder && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Actualizar Pedido"
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Actualizar Pedido</h2>
            <p>¿Desea cambiar el estatus del pedido a "Entrega inmediata" o "Entrega en 15 días"?</p>
            <div className="flex justify-end mt-4">
              <button onClick={() => handleUpdateOrder('Entrega inmediata')} className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600">Entrega inmediata</button>
              <button onClick={() => handleUpdateOrder('Entrega en 15 días')} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Entrega en 15 días</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PedidosAdmin;
