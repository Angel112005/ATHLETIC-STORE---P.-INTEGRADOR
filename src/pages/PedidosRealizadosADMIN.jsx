// import Header from "../components/organisms/Header"
// import { useNavigate } from "react-router-dom";


// function PedidosRealizadosADMIN(){
//     const navigate = useNavigate();

//     return(
        
//         <div className="min-h-screen bg-black">
//             <Header 
//             title="PEDIDOS REALIZADOS" 
//             logoSrc="/LOGO_BLACK.jpeg"
//             className="bg-white"
//             homeIconSrc="/path/to/home_icon.png"
//             onHomeClick = {() => navigate("/HomeAdmin")}
//             // isLoggedIn={isLoggedIn}
//             // onLogoutClick={handleLogout}
//             // onProfileClick={handleProfileClick}
//             />

//             <div className="">

//             </div>
            
//         </div>
        
//     )
// }

// export default PedidosRealizadosADMIN








import Header from "../components/organisms/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function PedidosRealizadosADMIN(){
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
                title="PEDIDOS REALIZADOS" 
                logoSrc="/LOGO_BLACK.jpeg"
                className="bg-white"
                // homeIconSrc="/path/to/home_icon.png"
                onHomeClick={() => navigate("/HomeAdmin")}
                isLoggedIn={isLoggedIn}
                onLogoutClick={handleLogoutClick}
                isAdminView={true}
            />
            <div className="">

            </div>
        </div>
    );
}

export default PedidosRealizadosADMIN;
