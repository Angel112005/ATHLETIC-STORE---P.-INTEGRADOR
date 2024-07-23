import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlistContext = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product, size, quantity) => {
    const newWishlistItem = { ...product, size, quantity };
    setWishlist(prevWishlist => [...prevWishlist, newWishlistItem]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
