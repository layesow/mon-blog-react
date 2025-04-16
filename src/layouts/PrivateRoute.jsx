// Importe React
import React from 'react';

// Importe le composant de redirection
import { Navigate } from 'react-router-dom';

// Importe le contexte d'authentification
import { useAuth } from '../contexts/useAuth';

// Déclare le composant PrivateRoute
const PrivateRoute = ({ children }) => {
  // Récupère l'utilisateur depuis le contexte d'authentification
  const { user } = useAuth();

  // Si l'utilisateur est connecté, on retourne les enfants (le composant protégé)
  // Sinon, on redirige vers la page de connexion
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
