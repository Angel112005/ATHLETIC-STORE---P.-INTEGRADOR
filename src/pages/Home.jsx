// src/pages/Home.jsx
import React from 'react';
import Header from '../components/organisms/Header';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();


    return (
        // <div className="min-h-screen bg-gray-100">
        //     <Header />
        //     <div className="p-8">
        //         <h2 className="text-3xl mb-4 text-center font-extrabold text-yellow-500 text-6xl">NOVEDADES</h2>
        //         <div className="flex items-center border p-4 bg-black">
        //             <img src="/invincible 3.jpeg" alt="Nike Run Invincible 3.jpeg" className="w-48 h-auto mr-4 text-white" />
        //             <div className="max-w-xl">
        //                 <h3 className="text-xl font-bold text-white">Nike Invincible Run 3</h3>
        //                 <p className='text-white'>Ofrecen máxima amortiguación y confort con su espuma ZoomX ultraligera. Ideales para largas distancias, combinan ventilación superior y tracción óptima para un rendimiento y comodidad incomparables. Perfectos para tus entrenamientos diarios.</p>
        //             </div>
        //         </div>
        //     </div>
        //         <h2 className='text-center text-4xl'>CATEGORÍAS</h2>
        //     <div className='border-r-emerald-700'>
        //         <div>

        //         </div>
        //     </div>
        // </div>
    <div className="min-h-screen bg-gray-100">
         <Header 
                title="ATHLETIC_STORE" 
                logoSrc="/LOGO_BLACK.jpeg" 
                homeIconSrc="/path/to/home_icon.png"
                // isLoggedIn={isLoggedIn}
                // onLogoutClick={handleLogout}
                // onProfileClick={handleProfileClick}
            />
        <div className="p-8 ">
            <h2 className="text-3xl mb-4 text-center font-extrabold text-yellow-500 text-6xl">NOVEDADES</h2>
            {/* <h2 className="text-3xl mb-4 text-center">NOVEDADES</h2> */}
            <div className="flex items-center border p-4 mb-8 bg-black">
                <img src="/invincible 3.jpeg" alt="Nike Invincible Run 3" className="w-48 h-auto mr-4 " />
                <div className="max-w-xl ">
                    <h3 className="text-xl font-bold text-white">Nike Invincible Run 3</h3>
                    <p className='text-white text-'>Ofrecen máxima amortiguación y confort con su espuma ZoomX ultraligera. Ideales para largas distancias, combinan ventilación superior y tracción óptima para un rendimiento y comodidad incomparables. Perfectos para tus entrenamientos diarios.</p>
                </div>
            </div>
            <h2 className="text-3xl mb-4 text-center">CATEGORÍAS</h2>
            <div className="flex justify-around ">
                <div onClick={() => navigate('/Running')} className="cursor-pointer p-4 border rounded-lg w-1/4 text-center bg-white hover:bg-gray-200">
                    <img src="/correrGIF.gif" className='border  w-16' alt="" />
                    <h3 className="text-xl font-bold">Running</h3>
                </div>
                <div onClick={() => navigate('/Futbol')} className="cursor-pointer p-4 border rounded-lg w-1/4 text-center bg-white hover:bg-gray-200">
                    <img src="/futGIF.gif" className='border w-16' alt="" />
                    <h3 className="text-xl font-bold">Futbol</h3>
                </div>
                <div onClick={() => navigate('/Casual')} className="cursor-pointer p-4 border rounded-lg w-1/4 text-center bg-white hover:bg-gray-200">
                    <img src="/casualGIF.gif" className='border w-16' alt=""/>
                    <h3 className="text-xl font-bold">Casual</h3>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;
