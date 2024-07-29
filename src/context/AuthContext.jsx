
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
  const [clientId, setClientId] = useState(localStorage.getItem('clientId') || null);

  const login = (token, id) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('clientId', id);
    setAuthToken(token);
    setClientId(id);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('clientId');
    setAuthToken(null);
    setClientId(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const id = localStorage.getItem('clientId');
    if (token) {
      setAuthToken(token);
      setClientId(id);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, clientId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
