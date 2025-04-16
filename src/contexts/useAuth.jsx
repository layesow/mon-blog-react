// src/contexts/useAuth.jsx

import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // On importe le contexte depuis AuthContext.jsx

// Hook personnalisé pour accéder au contexte Auth
export const useAuth = () => useContext(AuthContext);
