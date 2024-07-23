
// // src/context/ProductContext.js
// import React, { createContext, useState, useContext } from 'react';

// const ProductContext = createContext();

// export const useProductContext = () => useContext(ProductContext);

// export const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState([]);

//     const addProduct = (product) => {
//         setProducts(prevProducts => [...prevProducts, product]);
//     };

//     const editProduct = (updatedProduct) => {
//         setProducts(prevProducts => prevProducts.map(product => product.id === updatedProduct.id ? updatedProduct : product));
//     };

//     const deleteProduct = (productId) => {
//         setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
//     };

//     const getProductsByCategory = (category) => {
//         return products.filter(product => product.categoria === category);
//     };

//     return (
//         <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct, getProductsByCategory }}>
//             {children}
//         </ProductContext.Provider>
//     );
// };



// src/context/ProductContext.js
import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    // const editProduct = (updatedProduct) => {
    //     setProducts(prevProducts => prevProducts.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    // };

    const editProduct = async (updatedProduct) => {
        try {
            const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/Productos/${updatedProduct.Folio_producto}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar el producto');
            }
            setProducts(prevProducts => prevProducts.map(product => product.Folio_producto === updatedProduct.Folio_producto ? updatedProduct : product));
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    // const deleteProduct = (productId) => {
    //     setProducts(prevProducts => prevProducts.filter(product => product.Folio_producto !== productId));
    // };

    const deleteProduct = async (productId) => {
        try {
            const response = await fetch(`https://athleticstoreapi.integrador.xyz/api/Productos/${productId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
            setProducts(prevProducts => prevProducts.filter(product => product.Folio_producto !== productId));
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
        console.log("Producto eliminado", {productId})
    };

    const getProductsByCategory = (category) => {
        return products.filter(product => product.Categoria === category);
    };

    return (
        <ProductContext.Provider value={{ products, setProducts, addProduct, editProduct, deleteProduct, getProductsByCategory }}>
            {children}
        </ProductContext.Provider>
    );
};
