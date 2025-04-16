import api from '../api';

// Récupérer tous les articles
export const fetchArticles = () => api.get('/articles');

// Récupérer un article spécifique
export const fetchArticle = (id) => api.get(`/articles/${id}`);
