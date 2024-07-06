
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <>
        {/* <Header /> */}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>
                <form className="flex flex-col space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Email:</span>
                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Contraseña:</span>
                        <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                    </label>
                    <div className="flex justify-between mt-6">
                        <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-yellow-500 hover:text-black">Iniciar Sesión</button>
                        <button type="button" onClick={() => navigate('/')} className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-600">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;
