import api from '../api';

// Récupérer tous les utilisateurs
export const fetchUsers = () => api.get('/admin/users');

// Créer un utilisateur
export const createUser = (data) => api.post('/admin/users', data);

// Mettre à jour un utilisateur
export const updateUser = (id, data) => api.put(`/admin/users/${id}`, data);

// Supprimer un utilisateur
export const deleteUser = (id) => api.delete(`/admin/users/${id}`);
