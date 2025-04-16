import api from '../api';

// Récupérer les commentaires d'un article
export const fetchCommentsByArticle = (articleId) => api.get(`/articles/${articleId}/commentaires`);

// Ajouter un commentaire à un article
export const postComment = (articleId, data) => api.post(`/articles/${articleId}/commentaires`, data);
