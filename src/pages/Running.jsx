

// src/pages/Running.jsx
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import { useProductContext } from '../context/ProductContext';
import ProductCardClient from '../components/molecules/ProductCardClient';

function Running() {
    const navigate = useNavigate();
    const { getProductsByCategory } = useProductContext();
    const products = getProductsByCategory('Running');

    return (
        <div className="min-h-screen bg-black">
            <Header 
                title="ATHLETIC_STORE" 
                logoSrc="/LOGO_BLACK.jpeg"
                className="bg-white"
                homeIconSrc="/path/to/home_icon.png"
                onHomeClick={() => navigate("/")}
            />
            <div className="p-8 text-white">
                <h2 className="text-3xl mb-4">Running</h2>
                <p>Bienvenido a la categoría de Running. Aquí encontrarás productos ideales para correr.</p>
                <div className="grid grid-cols-3 gap-4 ">
                    {products.map(product => (
                        <ProductCardClient key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Running;
