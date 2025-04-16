import api from '../api';

// Récupérer tous les tags pour l'admin
export const fetchAdminTags = () => api.get('/admin/tags');

// Créer un tag
export const createTag = (data) => api.post('/admin/tags', data);

// Mettre à jour un tag
export const updateTag = (id, data) => api.put(`/admin/tags/${id}`, data);

// Supprimer un tag
export const deleteTag = (id) => api.delete(`/admin/tags/${id}`);
