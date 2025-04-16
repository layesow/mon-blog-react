import api from '../api';

// Récupérer toutes les catégories pour l'admin
export const fetchAdminCategories = () => api.get('/admin/categories');

// Créer une catégorie
export const createCategory = (data) => api.post('/admin/categories', data);

// Mettre à jour une catégorie
export const updateCategory = (id, data) => api.put(`/admin/categories/${id}`, data);

// Supprimer une catégorie
export const deleteCategory = (id) => api.delete(`/admin/categories/${id}`);
