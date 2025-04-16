import axios from 'axios';

// Configuration d'Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Ex : http://localhost:8000/api
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,  // Pour envoyer les cookies de session
});

// Intercepteur pour ajouter un token d'autorisation dans l'en-tête
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
