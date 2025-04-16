import api from '../api';

// Récupérer tous les tags
export const fetchTags = () => api.get('/tags');

// Récupérer un tag spécifique
export const fetchTag = (id) => api.get(`/tags/${id}`);
