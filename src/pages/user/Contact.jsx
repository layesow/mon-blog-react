// src/pages/public/Contact.jsx

import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      {/* Section Titre */}
      <div className="text-left mb-5">
        <h1 className="display-6 fw-bold">Contactez-nous</h1>
        <p className="text-muted">Nous sommes à votre écoute pour toute question ou collaboration.</p>
      </div>

      {/* Section Formulaire + Infos */}
      <div className="row">
        {/* Formulaire */}
        <div className="col-md-7 mb-4 mb-md-0">
          <form>
            <div className="mb-3">
              <label className="form-label">Nom complet</label>
              <input type="text" className="form-control" placeholder="Entrez votre nom" />
            </div>
            <div className="mb-3">
              <label className="form-label">Adresse email</label>
              <input type="email" className="form-control" placeholder="exemple@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Votre message..." />
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="col-md-5">
          <h4 className="fw-bold mb-3">Nos coordonnées</h4>
          <p><i className="fas fa-map-marker-alt me-2 text-primary"></i> Guédiawaye, Dakar, Sénégal</p>
          <p><i className="fas fa-envelope me-2 text-primary"></i> contact@monsite.com</p>
          <p><i className="fas fa-phone me-2 text-primary"></i> +221 77 942 85 54</p>
          <div className="mt-4">
            <h5 className="fw-bold mb-2">Suivez-nous</h5>
            <a href="#" className="me-3 text-dark"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="me-3 text-dark"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="me-3 text-dark"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-dark"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
