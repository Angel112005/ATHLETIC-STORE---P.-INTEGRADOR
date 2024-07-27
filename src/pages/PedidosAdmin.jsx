import Header from "../components/organisms/Header"
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function PedidosAdmin(){
    const navigate = useNavigate();
    const { authToken, logout } = useAuth();
    const isLoggedIn = !!authToken;

    const handleLogoutClick = () => {
        logout();
        navigate('/');
    };

    return(
        
        <div className="min-h-screen bg-black">
            <Header 
            title="GESTIÓN PEDIDOS" 
            logoSrc="/LOGO_BLACK.jpeg"
            className="bg-white" 
            // homeIconSrc="/path/to/home_icon.png"
            onHomeClick = {() => navigate("/HomeAdmin")}
            isLoggedIn={isLoggedIn}
            onLogoutClick={handleLogoutClick}
            isAdminView={true}
            />
            <div className="text-white text-center mt-5">
                {/* <h1 className="text-2xl">HISTORIAL DE PEDIDOS</h1> */}
            </div>

        </div>
        
    )
}

export default PedidosAdmin
