


import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlistContext = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product, size, quantity) => {
    const newWishlistItem = { ...product, size, quantity };
    setWishlist(prevWishlist => [...prevWishlist, newWishlistItem]);
  };

  const updateWishlistItem = (updatedItem) => {
    setWishlist(prevWishlist =>
      prevWishlist.map(item =>
        item.Folio_producto === updatedItem.Folio_producto ? updatedItem : item
      )
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.Folio_producto !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, updateWishlistItem, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};











// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { useAuth } from './AuthContext';

// const WishlistContext = createContext();

// export const useWishlistContext = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const { authToken, clientId } = useAuth();
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       if (!clientId) return;
//       try {
//         const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/wishlist/cliente/${clientId}`, {
//           headers: {
//             'Authorization': localStorage.getItem('authToken'),
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Error al recuperar la lista de deseos');
//         }
//         const data = await response.json();
//         setWishlist(data);
//       } catch (error) {
//         console.error('Error al recuperar la lista de deseos:', error);
//       }
//     };

//     fetchWishlist();
//   }, [authToken, clientId]);

//   const addToWishlist = async (product, size, quantity) => {
//     const newWishlistItem = {
//       Id_Cliente: clientId,
//       Id_Producto: product.Folio_producto,
//       Cantidad: quantity,
//       Talla: size,
//       Subtotal: product.Precio * quantity,
//     };

//     try {
//       const response = await fetch('https://athleticstoreapi.integrador.xyz/api/wishlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem('authToken'),
//         },
//         body: JSON.stringify(newWishlistItem),
//       });

//       if (!response.ok) {
//         throw new Error('Error al agregar el producto a la lista de deseos');
//       }

//       const data = await response.json();
//       setWishlist((prevWishlist) => [...prevWishlist, data]);
//     } catch (error) {
//       console.error('Error al agregar el producto a la lista de deseos:', error);
//     }
//   };

//   const updateWishlistItem = (updatedItem) => {
//     setWishlist((prevWishlist) =>
//       prevWishlist.map((item) =>
//         item.Folio_producto === updatedItem.Folio_producto ? updatedItem : item
//       )
//     );
//   };

//   const removeFromWishlist = async (productId) => {
//     try {
//       const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/wishlist/${productId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': localStorage.getItem('authToken'),
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Error al eliminar el producto de la lista de deseos');
//       }

//       setWishlist((prevWishlist) => prevWishlist.filter((item) => item.Folio_producto !== productId));
//     } catch (error) {
//       console.error('Error al eliminar el producto de la lista de deseos:', error);
//     }
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, updateWishlistItem, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };











// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { useAuth } from './AuthContext';

// const WishlistContext = createContext();

// export const useWishlistContext = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);
//   const { clientId } = useAuth();

//   const fetchWishlist = async () => {
//     try {
//       const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/wishlist/cliente/${clientId}`, {
//         headers: {
//           'Authorization': localStorage.getItem('authToken'), // Mantener encabezado como se solicitó
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Error al recuperar la lista de deseos');
//       }

//       const data = await response.json();
//       setWishlist(data);
//     } catch (error) {
//       console.error('Error al recuperar la lista de deseos:', error);
//     }
//   };

//   const addToWishlist = async (product, size, quantity) => {
//     const newItem = {
//       Id_Cliente: clientId,
//       Id_Producto: product.Folio_producto,
//       Cantidad: quantity,
//       Talla: size,
//       Subtotal: quantity * product.Precio,
//     };

//     try {
//       const response = await fetch('https://athleticstoreapi.integrador.xyz/api/wishlist/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem('authToken'), // Mantener encabezado como se solicitó
//         },
//         body: JSON.stringify(newItem),
//       });

//       if (!response.ok) {
//         throw new Error('Error al agregar el producto a la lista de deseos');
//       }

//       setWishlist(prevWishlist => [...prevWishlist, { ...newItem, ...product }]);
//     } catch (error) {
//       console.error('Error al agregar a la lista de deseos:', error);
//     }
//   };

//   const updateWishlistItem = async (updatedItem) => {
//     try {
//       const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/wishlist/${updatedItem.Id_Wish}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': localStorage.getItem('authToken'), // Mantener encabezado como se solicitó
//         },
//         body: JSON.stringify(updatedItem),
//       });

//       if (!response.ok) {
//         throw new Error('Error al actualizar el producto de la lista de deseos');
//       }

//       setWishlist(prevWishlist =>
//         prevWishlist.map(item =>
//           item.Id_Wish === updatedItem.Id_Wish ? updatedItem : item
//         )
//       );
//     } catch (error) {
//       console.error('Error al actualizar la lista de deseos:', error);
//     }
//   };

//   const removeFromWishlist = async (wishId) => {
//     try {
//       const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/wishlist/${wishId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': localStorage.getItem('authToken'), // Mantener encabezado como se solicitó
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Error al eliminar el producto de la lista de deseos');
//       }

//       setWishlist(prevWishlist => prevWishlist.filter(item => item.Id_Wish !== wishId));
//     } catch (error) {
//       console.error('Error al eliminar de la lista de deseos:', error);
//     }
//   };

//   useEffect(() => {
//     if (clientId) {
//       fetchWishlist();
//     }
//   }, [clientId]);

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, updateWishlistItem, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };
