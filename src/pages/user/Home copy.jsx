// src/pages/public/Home.jsx

import React from 'react';
import '../../styles/home.css';  // Importer le fichier CSS (on verra ça plus tard)

const Home = () => {
  return (
    <>
<div>
  {/* Header */}
  <header>
  <nav className="navbar navbar-expand-lg navbar-light container">
    <a className="navbar-brand" href="#">
      <i className="fas fa-feather-alt text-primary" /> MonBlog
    </a>
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
        <li className="nav-item">
          <a className="btn btn-outline-primary me-1" href="#">
            <i className="fas fa-user me-1"></i> Connexion
          </a>
        </li>
        <li className="nav-item">
          <a className="btn btn-primary" href="#">
            <i className="fas fa-power-off me-1"></i> Déconnexion
          </a>
        </li>
      </ul>

    </div>
  </nav>
</header>

  {/* Slider */}
  <div id="carouselBlog" className="carousel slide mb-4" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://fnh.ma//uploads/actualites/676d3885146be_MicrosoftTeams-image.webp" className="d-block w-100" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src="https://fnh.ma//uploads/actualites/676d3885146be_MicrosoftTeams-image.webp" className="d-block w-100" alt="Slide 2" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselBlog" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" />
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselBlog" data-bs-slide="next">
      <span className="carousel-control-next-icon" />
    </button>
  </div>
  {/* Contenu principal */}
  <div className="container">
    <h2 className="mb-4">🆕 Mes articles de blog</h2>
    <div className="row">
      {/* Colonne des articles */}
      <div className="col-md-8">
        <div className="row">
          {/* Post 1 */}
          {/* Post 1 */}
          <div className="col-md-6">
            <div className="post-card">
              <div className="post-image mb-2">
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6fAe6wDymTIOIiQ0QvXJOCYiJuw0lkb9WF_ONfOhfjPzxo-wU152_MzrpjVVMj9kzWV33ocekNQM6BhikTSPsVzmlli6D5Ol4Qpe824LWTqQisrmc68cz1Mv_ikWZxEdUU_2uYw/s1600/abstract-iot.jpg" className="w-100" alt="Image article 1" />
              </div>
              <h4>Titre de l'article</h4>
              <p>Un aperçu du contenu de l'article pour attirer les lecteurs à lire la suite...</p>
              <p className="text-muted mb-2">
                <i className="far fa-calendar-alt me-1" />10 Avril 2025 |
                <i className="fas fa-user me-1" />Abdoulaye Sow |
                <i className="far fa-comments me-1" />5 commentaires
              </p>
              <a href="#" className="btn btn-primary btn-sm">Lire plus</a>
            </div>
          </div>
          {/* Post 2 */}
          <div className="col-md-6">
            <div className="post-card">
              <div className="post-image mb-2">
                <img src="https://www.telecomreviewafrica.com/images/stories/2017/09/news-28-09-06-i.jpg" className="w-100" alt="Image article 2" />
              </div>
              <h4>Deuxième article</h4>
              <p>Découvrez les dernières nouveautés du monde digital et du web.</p>
              <p className="text-muted mb-2">
                <i className="far fa-calendar-alt me-1" />8 Avril 2025 |
                <i className="fas fa-user me-1" />Jean Dupont |
                <i className="far fa-comments me-1" />2 commentaires
              </p>
              <a href="#" className="btn btn-primary btn-sm">Lire plus</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="col-md-4">
        {/* Derniers articles */}
        <div className="post-sidebar mb-4">
          <h5><i className="fas fa-newspaper me-2 text-primary" />Derniers articles</h5>
          <div className="d-flex mb-3">
            <img
              src="https://www.telecomreviewafrica.com/images/stories/2017/09/news-28-09-06-i.jpg"
              alt="Article"
              className="me-3"
              style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <div>
              <a href="#" className="text-dark fw-bold d-block mb-1">Titre de l’article 1</a>
              <small className="text-muted">12 Avril 2025</small>
            </div>
          </div>
          <div className="d-flex mb-3">
            <img
              src="https://www.telecomreviewafrica.com/images/stories/2017/09/news-28-09-06-i.jpg"
              alt="Article"
              className="me-3"
              style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <div>
              <a href="#" className="text-dark fw-bold d-block mb-1">Titre de l’article 2</a>
              <small className="text-muted">10 Avril 2025</small>
            </div>
          </div>
        </div>

        {/* Catégories */}
        <div className="post-sidebar mb-4">
          <h5><i className="fas fa-list me-2 text-primary" />Catégories</h5>
          <ul className="list-unstyled">
            <li><a href="#">Communication digitale</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Web design</a></li>
            <li><a href="#">Développement</a></li>
          </ul>
        </div>

        {/* Tags */}
        <div className="post-sidebar">
          <h5><i className="fas fa-tags me-2 text-primary" />Tags</h5>
          <div>
            <span className="badge bg-secondary m-1">#marketing</span>
            <span className="badge bg-secondary m-1">#wordpress</span>
            <span className="badge bg-secondary m-1">#laravel</span>
            <span className="badge bg-secondary m-1">#design</span>
          </div>
        </div>
      </div>

    </div>
  </div>
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
</div>

    </>
  );
};

export default Home;
