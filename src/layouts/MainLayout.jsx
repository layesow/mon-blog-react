// src/layouts/MainLayout.jsx
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import '../styles/home.css'; // On importe le style ici

const MainLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Ajoute ici la logique de déconnexion si besoin
  };

  return (
    <>
      {/* Header avec navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light container">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-feather-alt text-primary" /> MonBlog
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Accueil</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Articles</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Catégories</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>

            <ul className="navbar-nav">
              {isLoggedIn ? (
                <li className="nav-item">
                  <a className="btn btn-primary" href="#" onClick={handleLogout}>
                    <i className="fas fa-power-off me-1"></i> Déconnexion
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="btn btn-outline-primary me-1" href="#" onClick={handleLogin}>
                    <i className="fas fa-user me-1"></i> Connexion
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>

      {/* Contenu principal */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-5">
          <div className="container text-center">
          <p>© 2025 MonBlog. Tous droits réservés.</p>
          <div>
              <a href="#"><i className="fab fa-facebook-f me-3" /></a>
              <a href="#"><i className="fab fa-twitter me-3" /></a>
              <a href="#"><i className="fab fa-instagram me-3" /></a>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
          </div>
      </footer>
    </>
  );
};

export default MainLayout;
