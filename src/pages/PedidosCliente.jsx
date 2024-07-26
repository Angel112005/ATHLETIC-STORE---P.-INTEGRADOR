import React from 'react'
import Header from "../components/organisms/Header"
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export default function PedidosCliente() {

    const navigate = useNavigate();
    const { authToken, logout } = useAuth();
    const isLoggedIn = !!authToken;    

    const handleLogoutClick = () => {
      logout();
      navigate('/');
    };

  return (
    
    <div className="min-h-screen bg-black">
    <Header 
    title="PEDIDOS REALIZADOS" 
    logoSrc="/LOGO_BLACK.jpeg"
    className="bg-white" 
    homeIconSrc="/path/to/home_icon.png"
    onHomeClick = {() => navigate("/")}
    isLoggedIn={isLoggedIn}
    onLogoutClick={handleLogoutClick}
    />
    <div className="text-white text-center mt-5">
        {/* <h1 className="text-2xl">HISTORIAL DE PEDIDOS</h1> */}
    </div>

</div>
  )
}
