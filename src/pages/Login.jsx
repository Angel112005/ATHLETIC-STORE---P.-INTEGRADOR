// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/organisms/Header';
// import LoginForm from '../components/organisms/LoginForm';

// export default function Login() {
//   const navigate = useNavigate();

//   const handleLogin = async (credentials) => {
//     try {
//       const response = await fetch('https://athleticstoreapi.integrador.xyz/api/Clientes/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login exitoso:', data);
//         const { username, rol } = data;

//         // Almacena el nombre de usuario (o cualquier otro dato que necesites)
//         localStorage.setItem('username', username);

//         // Redirige según el rol
//         if (rol === 1) {
//           navigate('/HomeAdmin');
//         } else if (rol === 2) {
//           navigate('/');
//         } else {
//           console.error('Rol no reconocido');
//         }
//       } else {
//         const errorData = await response.json();
//         console.error('Error en el inicio de sesión:', errorData);
//       }
//     } catch (error) {
//       console.error('Error en el inicio de sesión:', error);
//     }
//   };

//   return (
//     <div>
//       <Header 
//         title="ATHLETIC_STORE" 
//         logoSrc="/LOGO_BLACK.jpeg"
//         className="bg-white"
//         homeIconSrc="/path/to/home_icon.png"
//         onHomeClick={() => navigate("/")}
//       />
//       <div className="min-h-screen flex items-center justify-center bg-black">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>
//           <LoginForm onSubmit={handleLogin} onCancel={() => navigate('/')} />
//           <div className="mt-4 text-center">
//             <p className="text-sm text-gray-600">¿No estás registrado? <span onClick={() => navigate('/register')} className="text-blue-500 cursor-pointer">Regístrate</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import Header from '../components/organisms/Header';
// import LoginForm from '../components/organisms/LoginForm';

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleLogin = async (credentials) => {
//     try {
//       const response = await fetch('https://athleticstoreapi.integrador.xyz/api/Clientes/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login exitoso:', data);
//         const { username, rol } = data;

//         // Almacena el nombre de usuario (o cualquier otro dato que necesites)
//         login(username);

//         // Redirige según el rol
//         if (rol === 1) {
//           navigate('/HomeAdmin');
//         } else if (rol === 2) {
//           navigate('/');
//         } else {
//           console.error('Rol no reconocido');
//         }
//       } else {
//         const errorData = await response.json();
//         console.error('Error en el inicio de sesión:', errorData);
//       }
//     } catch (error) {
//       console.error('Error en el inicio de sesión:', error);
//     }
//   };

//   return (
//     <div>
//       <Header 
//         title="ATHLETIC_STORE" 
//         logoSrc="/LOGO_BLACK.jpeg"
//         className="bg-white"
//         homeIconSrc="/path/to/home_icon.png"
//         onHomeClick={() => navigate("/")}
//       />
//       <div className="min-h-screen flex items-center justify-center bg-black">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>
//           <LoginForm onSubmit={handleLogin} onCancel={() => navigate('/')} />
//           <div className="mt-4 text-center">
//             <p className="text-sm text-gray-600">¿No estás registrado? <span onClick={() => navigate('/register')} className="text-blue-500 cursor-pointer">Regístrate</span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/organisms/Header';
import LoginForm from '../components/organisms/LoginForm';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('https://athleticstoreapi.integrador.xyz/api/Clientes/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        const token = response.headers.get('Authorization');
        // console.log('Login exitoso:', data, 'Token:', token);
        console.log('Estoy recibiendo este token:', token)

        if (token) {
          // Almacena el token en el contexto
          login(token);
        } else {
          console.error('No se recibió el token de autenticación');
          return;
        }

        const { rol } = data;

        // Redirige según el rol
        if (rol === 1) {
          navigate('/HomeAdmin');
        } else if (rol === 2) {
          navigate('/');
        } else {
          console.error('Rol no reconocido');
        }
      } else {
        const errorData = await response.json();
        console.error('Error en el inicio de sesión:', errorData);
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
    }
  };

  return (
    <div>
      <Header 
        title="ATHLETIC_STORE" 
        logoSrc="/LOGO_BLACK.jpeg"
        className="bg-white"
        homeIconSrc="/path/to/home_icon.png"
        onHomeClick={() => navigate("/")}
      />
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl mb-4 text-center">Iniciar Sesión</h2>
          <LoginForm onSubmit={handleLogin} onCancel={() => navigate('/')} />
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">¿No estás registrado? <span onClick={() => navigate('/register')} className="text-blue-500 cursor-pointer">Regístrate</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
