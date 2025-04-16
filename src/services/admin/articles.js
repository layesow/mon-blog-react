import api from '../api';

// Récupérer tous les articles pour l'admin
export const fetchAdminArticles = () => api.get('/admin/articles');

// Créer un nouvel article
export const createArticle = (data) => api.post('/admin/articles', data);

// Mettre à jour un article
export const updateArticle = (id, data) => api.put(`/admin/articles/${id}`, data);

// Supprimer un article
export const deleteArticle = (id) => api.delete(`/admin/articles/${id}`);
