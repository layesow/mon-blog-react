// src/pages/public/Article.jsx

import React from 'react';

function Article() {
  return (
    <div className="container py-5">
      {/* Titre de la page */}
      <div className="mb-4 text-left">
        <h6 className="display-6 fw-bold">Tous les articles</h6>
        <p className="text-muted">Découvrez nos derniers articles de blog sur le digital, le web, et plus encore.</p>
      </div>

      {/* Contenu principal - Liste des articles */}
      <div className="row">
        {/* Exemple d'article - à remplacer par un mapping dynamique plus tard */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://www.telecomreviewafrica.com/images/stories/2017/09/news-28-09-06-i.jpg"
              className="card-img-top"
              alt="Article"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Titre de l'article</h5>
                <p className="card-text">Un extrait ou un résumé de l'article pour susciter l'intérêt du lecteur.</p>
                <p className="text-muted mb-2">
                    <i className="far fa-calendar-alt me-1" />10 Avril 2025 |
                    <i className="fas fa-user me-1" />Abdoulaye Sow |
                    <i className="far fa-comments me-1" />5 commentaires
                </p>
              <a href="#" className="btn btn-primary btn-sm">Lire plus</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://www.telecomreviewafrica.com/images/stories/2017/09/news-28-09-06-i.jpg"
              className="card-img-top"
              alt="Article"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Titre de l'article</h5>
              <p className="card-text">Un extrait ou un résumé de l'article pour susciter l'intérêt du lecteur.</p>
              <p className="text-muted mb-2">
                    <i className="far fa-calendar-alt me-1" />10 Avril 2025 |
                    <i className="fas fa-user me-1" />Abdoulaye Sow |
                    <i className="far fa-comments me-1" />5 commentaires
                </p>
              <a href="#" className="btn btn-primary btn-sm">Lire plus</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://www.telecomreviewafrica.com/images/stories/2017/09/news-28-09-06-i.jpg"
              className="card-img-top"
              alt="Article"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Titre de l'article</h5>
              <p className="card-text">Un extrait ou un résumé de l'article pour susciter l'intérêt du lecteur.</p>
              <p className="text-muted mb-2">
                    <i className="far fa-calendar-alt me-1" />10 Avril 2025 |
                    <i className="fas fa-user me-1" />Abdoulaye Sow |
                    <i className="far fa-comments me-1" />5 commentaires
                </p>
              <a href="#" className="btn btn-primary btn-sm">Lire plus</a>
            </div>
          </div>
        </div>
        {/* Réplique d'autres articles ici... */}
      </div>
    </div>
  );
}

export default Article;
