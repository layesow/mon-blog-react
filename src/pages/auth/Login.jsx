import React from 'react';

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
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
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
