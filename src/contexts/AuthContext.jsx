// src/contexts/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, logoutUser, registerUser } from '../services/auth';

const AuthContext = createContext(); // Création du contexte

// Composant AuthProvider pour fournir le contexte Auth
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stocke l'utilisateur connecté
  const navigate = useNavigate(); // Permet la navigation

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token }); // Simule un utilisateur connecté avec le token
    }
  }, []);

  const login = async (data) => {
    try {
      const response = await loginUser(data);
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  const register = async (data) => {
    try {
      const response = await registerUser(data);
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error("Erreur d'inscription", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    logoutUser();
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext }; // Exportation du contexte pour utilisation ailleurs
