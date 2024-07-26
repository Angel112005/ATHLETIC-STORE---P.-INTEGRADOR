// // src/context/AuthContext.js
// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

//   const login = (token) => {
//     localStorage.setItem('authToken', token);
//     setAuthToken(token);
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     setAuthToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ authToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

//   const login = (token) => {
//     localStorage.setItem('authToken', token);
//     setAuthToken(token);
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     setAuthToken(null);
//   };

//   // Comprobar el token de autenticación en el montaje del componente
//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       setAuthToken(token);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ authToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };









import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
