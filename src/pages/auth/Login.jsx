// src/pages/public/Login.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Connexion</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email :</label>
            <input type="email" className="form-control" placeholder="Entrez votre email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe :</label>
            <input type="password" className="form-control" placeholder="Entrez votre mot de passe" />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Se connecter</button>
          </div>
        </form>
        <p className="text-center">
          Pas encore de compte ? <Link to="/register">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
