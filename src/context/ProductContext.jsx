
// src/context/ProductContext.js
import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    const editProduct = (updatedProduct) => {
        setProducts(prevProducts => prevProducts.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    };

    const deleteProduct = (productId) => {
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    };

    const getProductsByCategory = (category) => {
        return products.filter(product => product.categoria === category);
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct, getProductsByCategory }}>
            {children}
        </ProductContext.Provider>
    );
};
