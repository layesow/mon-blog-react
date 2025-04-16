import api from '../api';

// Récupérer tous les commentaires pour l'admin
export const fetchAdminComments = () => api.get('/admin/commentaires');

// Supprimer un commentaire
export const deleteComment = (id) => api.delete(`/admin/commentaires/${id}`);
