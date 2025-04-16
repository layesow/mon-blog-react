import api from '../api';

// Récupérer toutes les catégories
export const fetchCategories = () => api.get('/categories');

// Récupérer une catégorie spécifique
export const fetchCategory = (id) => api.get(`/categories/${id}`);
