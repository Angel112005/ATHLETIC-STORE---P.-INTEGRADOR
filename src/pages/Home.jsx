import React from 'react';
import Header from '../components/organisms/Header';
import { useNavigate } from 'react-router-dom';
import BoxHomeClient from '../components/organisms/BoxHomeClient';
import BoxCatologoHome from '../components/organisms/BoxCatalogoHome';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black">
            <Header
                title="ATHLETIC_STORE"
                logoSrc="/LOGO_BLACK.jpeg"
                className="bg-white"
                homeIconSrc="/path/to/home_icon.png"
                // isLoggedIn={isLoggedIn}
                // onLogoutClick={handleLogout}
                // onProfileClick={handleProfileClick}
            />
            <div className="p-2  ">
                <h2 className="text-3xl mb-2 text-center font-extrabold text-white text-6xl mt-4 mb-6">NOVEDADES</h2>
                <div className="flex justify-evenly  ">
                    <div className="flex items-center border rounded-3xl p-4 bg-amber-200 w-2/3">
                        <img src="/NikeInvincible3.jpeg" alt="Nike Invincible Run 3" className="w-48 h-auto mr-8 ml-6 rounded-3xl" />
                        <div className="max-w-4xl ml-4  text-justify">
                            <h3 className="text-3xl font-bold text-black text-center ">Nike Invincible Run 3</h3>
                            <p className='text-xl text-black font-bold mt-3 mr-10'>Ofrecen máxima amortiguación y confort con su espuma ZoomX ultraligera. Ideales para largas distancias, combinan ventilación superior y tracción óptima para un rendimiento y comodidad incomparables. Perfectos para tus entrenamientos diarios.</p>
                        </div>
                    </div>
                    <div className=" mb-5">
                        <BoxCatologoHome
                            onCatalogClick={() => navigate('/CatalogoClientes')}
                        />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center mt-6 text-4xl text-white">CATEGORÍAS</h2>
                <BoxHomeClient
                    onRunClick={() => navigate('/Running')}
                    onFutClick={() => navigate('/Futbol')}
                    onCasualClick={() => navigate('/Casual')}
                />
            </div>
        </div>
    );
}

export default Home;
