import api from './api';

// Connexion
export const loginUser = (data) => api.post('/login', data);

// Inscription
export const registerUser = (data) => api.post('/register', data);

// Déconnexion
export const logoutUser = () => api.post('/logout');
