// import Header from '../components/organisms/Header';
// import Label from '../components/atoms/Label';
// import BoxHomeAdmin from '../components/organisms/BoxHomeAdmin';
// import { useNavigate } from 'react-router-dom';
// // import { useState } from 'react';


// function HomeAdmin() {
//     const navigate = useNavigate();


//     return (
//         <div className='min-h-screen bg-gray-200'>
//             <Header></Header>
//             <div className='text-center mt-8'>
//                 <Label className="text-4xl text-center font-bold">GESTIÓN DE VENTAS</Label>
//                 <Label className="text-x1 mt-4">¿Qué operación desea realizar?</Label>
                
//                 <BoxHomeAdmin 
//                     onPedidosClick={()=> navigate('/pedidos')}
//                     onVentasClick={()=> navigate('/ventas')}
//                     onGestionClick={()=> navigate('/gestion')}
//                 />
                
//             </div>
//         </div>
//     );
// }

// export default HomeAdmin;





// <div className="min-h-screen bg-gray-100">
//     <Header />
//     <div className="p-8 ">
//         <h2 className="text-3xl mb-4 text-center font-extrabold text-yellow-500 text-6xl">¿Qué operación desea realizar?</h2>
//         <div>

//         </div>
//         {/* <h2 className="text-3xl mb-4 text-center">NOVEDADES</h2> */}
//         {/* <div className="flex items-center border p-4 mb-8 bg-black">
//             <img src="/invincible 3.jpeg" alt="Nike Invincible Run 3" className="w-48 h-auto mr-4 " />
//             <div className="max-w-xl ">
//                 <h3 className="text-xl font-bold text-white">Nike Invincible Run 3</h3>
//                 <p className='text-white text-'>Ofrecen máxima amortiguación y confort con su espuma ZoomX ultraligera. Ideales para largas distancias, combinan ventilación superior y tracción óptima para un rendimiento y comodidad incomparables. Perfectos para tus entrenamientos diarios.</p>
//             </div>
//         </div> */}
//         <h2 className="text-3xl mb-4 text-center">CATEGORÍAS</h2>
//         <div className="flex justify-around">
//             <div>

//             </div>
//             <div>
                
//             </div>
//             {/* <div onClick={() => navigate('/Running')} className="cursor-pointer p-4 border rounded-lg w-1/4 text-center bg-white hover:bg-gray-200">
//                 <h3 className="text-xl font-bold">Running</h3>
//             </div>
//             <div onClick={() => navigate('/Futbol')} className="cursor-pointer p-4 border rounded-lg w-1/4 text-center bg-white hover:bg-gray-200">
//                 <h3 className="text-xl font-bold">Futbol</h3>
//             </div>
//             <div onClick={() => navigate('/Casual')} className="cursor-pointer p-4 border rounded-lg w-1/4 text-center bg-white hover:bg-gray-200">
//                 <h3 className="text-xl font-bold">Casual</h3>
//             </div> */}
//         </div>
//     </div>
// </div>




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
        <div className='min-h-screen bg-gray-100'>
            <Header 
                title="ATHLETIC_STORE" 
                logoSrc="/LOGO_BLACK.jpeg" 
                // homeIconSrc="/path/to/home_icon.png"
                isLoggedIn={isLoggedIn}
                onLogoutClick={handleLogout}
                onProfileClick={handleProfileClick}
            />
            <div className='text-center mt-12'>
                <Label className="text-4xl font-bold">GESTIÓN DE VENTAS</Label>
                <Label className="text-xl mt-8">¿Qué operación desea realizar?</Label>
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