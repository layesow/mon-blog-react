// src/pages/public/Register.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-4" style={{ minHeight: '80vh' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Créer un compte</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nom complet :</label>
            <input type="text" className="form-control" placeholder="Entrez votre nom" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email :</label>
            <input type="email" className="form-control" placeholder="Entrez votre email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe :</label>
            <input type="password" className="form-control" placeholder="Créez un mot de passe" />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">S'inscrire</button>
          </div>
        </form>
        <p className="text-center">
          Déjà inscrit ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
