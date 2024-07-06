import Header from "../components/organisms/Header"
import { useNavigate } from "react-router-dom";


function VentasAdmin(){
    const navigate = useNavigate();

    return(
        <>
        <Header 
        title="PEDIDOS REALIZADOS" 
        logoSrc="/LOGO_BLACK.jpeg" 
        homeIconSrc="/path/to/home_icon.png"
        onHomeClick = {() => navigate("/")}
        // isLoggedIn={isLoggedIn}
        // onLogoutClick={handleLogout}
        // onProfileClick={handleProfileClick}
        />

        <div>
            <button></button>
        </div>
        </>
    )
}

export default VentasAdmin