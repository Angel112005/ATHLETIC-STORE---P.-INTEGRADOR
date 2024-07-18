

// import React, { useState } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Label from '../components/atoms/Label';
import BoxHomeAdmin from '../components/organisms/BoxHomeAdmin';

function HomeAdmin() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Aquí podrías obtener el estado real de autenticación

    const handleLogout = () => {
        // Lógica para cerrar sesión
        setIsLoggedIn(false);
        navigate('/'); // Redirigir al home o login
    };

    const handleProfileClick = () => {
        // Lógica para ir al perfil del usuario
        // navigate('/profile');
    };

    return (
        <div className='min-h-screen bg-black'>
            <Header 
                title="ATHLETIC_STORE" 
                logoSrc="/LOGO_BLACK.jpeg"
                className="bg-white" 
                // homeIconSrc="/path/to/home_icon.png"
                isLoggedIn={isLoggedIn}
                onLogoutClick={handleLogout}
                onProfileClick={handleProfileClick}
            />
            <div className='text-center mt-12'>
                <Label className="text-4xl font-bold text-white">GESTIÓN DE VENTAS</Label>
                <Label className="text-xl mt-8 text-white">¿Qué operación desea realizar?</Label>
                <BoxHomeAdmin 
                    onPedidosClick={() => navigate('/Pedidos')}
                    onVentasClick={() => navigate('/Ventas')}
                    onGestionClick={() => navigate('/Gestion')}
                />
            </div>
        </div>
    );
}

export default HomeAdmin;