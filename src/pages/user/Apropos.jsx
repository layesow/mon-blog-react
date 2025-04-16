// src/pages/public/Apropos.jsx

import React from 'react';

function Apropos() {
  return (
    <div className="container py-5">
      {/* Section Titre */}
      <div className="text-left mb-5">
        <h6 className="display- fw-bold">À propos de nous</h6>
        <p className="text-muted">Apprenez à mieux nous connaître : notre mission, nos valeurs et notre engagement.</p>
      </div>

      {/* Section Contenu */}
      <div className="row align-items-center">
        {/* Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://media.laforet.com/prod/storage/media/66131/20201229213427000000_pourquoi-les-nouvelles-technologies-digitales-permettent-de-vendre-des-proprietes-sur-la-costa-brava2.jpg"
            alt="À propos"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Texte */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Qui sommes-nous ?</h3>
          <p className="text-muted">
            Nous sommes une équipe passionnée par le digital, le web et l'innovation. Notre mission est de proposer des
            solutions créatives, accessibles et performantes à nos clients pour les aider à réussir dans leur
            transformation numérique.
          </p>
          <p className="text-muted">
            Grâce à une expertise en développement web, en design et en marketing digital, nous mettons tout en œuvre
            pour créer des expériences uniques et sur-mesure.
          </p>
          <a href="/contact" className="btn btn-outline-primary mt-3">Nous contacter</a>
        </div>
      </div>
    </div>
  );
}

export default Apropos;
