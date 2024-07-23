
import { useNavigate } from 'react-router-dom';
import Logo from '../atoms/Logo';
import HeaderTitle from '../atoms/HeaderTitle';
import Button from '../atoms/Button';

function Header({ onHomeClick, logoSrc, homeIconSrc, title, isLoggedIn, onLoginClick, onRegisterClick, onProfileClick, onLogoutClick, className }) {
    const navigate = useNavigate();

    return (
        <header className={`flex justify-between items-center py-4 px-4 md:px-8  ${className}`}>
            <button onClick={onHomeClick}>
                <Logo src={logoSrc} alt="Logo" className="rounded-full w-20" />
            </button>
            <HeaderTitle>{title}</HeaderTitle>
            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <>
                        <button onClick={onProfileClick} className=" rounded-full bg-white">
                            <img src="/profile.png" alt="Profile" className="w-8 h-8 md:w-14 md:h-14" />
                        </button>
                        <Button onClick={onLogoutClick} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-neutral-900 hover:text-white bg-red-500 text-white ">
                            Cerrar Sesión
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => navigate('/login')} className='py-2 px-4 bg-gray-200 rounded-lg hover:bg-neutral-900 hover:text-white' >Iniciar Sesión</Button>
                        <Button onClick={() => navigate('/register')} className='' >Registrarse</Button>
                    </>
                )}
                {/* <HomeButton onClick={onHomeClick} src={homeIconSrc} alt="Home" /> */}
            </div>
        </header>
    );
}

export default Header;