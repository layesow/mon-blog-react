// src/pages/public/ArticleDetails.jsx

import React from 'react';

function ArticleDetails() {
  return (
    <div className="container py-4">
      <div className="row">
        {/* Colonne principale (article) */}
        <div className="col-md-8">
          <div className="mb-4">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6fAe6wDymTIOIiQ0QvXJOCYiJuw0lkb9WF_ONfOhfjPzxo-wU152_MzrpjVVMj9kzWV33ocekNQM6BhikTSPsVzmlli6D5Ol4Qpe824LWTqQisrmc68cz1Mv_ikWZxEdUU_2uYw/s1600/abstract-iot.jpg"
              alt="Image article"
              className="img-fluid rounded"
            />
          </div>
          <h2 className="mb-3">Titre de l'article</h2>
          <p className="text-muted mb-3">
            <i className="far fa-calendar-alt me-2"></i>10 Avril 2025 |
            <i className="fas fa-user ms-2 me-1"></i>Abdoulaye Sow |
            <i className="far fa-comments ms-2 me-1"></i>5 commentaires
          </p>
          <p>
            Voici le contenu détaillé de l’article. Tu peux développer cette section avec des paragraphes, des images supplémentaires, des citations ou même des vidéos pour enrichir la lecture. L’objectif est de captiver l’attention du lecteur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
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
  );
}

export default ArticleDetails;
