import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length }]);
  };
  
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
  };
  
  const deleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProducts };
