// src/pages/Home.jsx
import React from "react";
import "../index.css"; // Assicurati di importare il CSS globale

export default function Home() {
  return (
    <div className="home-page">
      {/* Titolo principale */}
      <h2 className="home-title">Benvenuto nella mia guida per Alghero!</h2>
      {/* Sottotitolo introduttivo */}
      <p className="home-subtitle">
        Scopri i migliori ristoranti, le spiagge da sogno e la vita notturna di
        questa splendida città.
      </p>

      {/* Contenitore per l'immagine non in full-width */}
      <div className="home-hero">
        <img
          src="/Alghero.jpeg"
          alt="Veduta di Alghero"
          className="home-hero-img"
        />
      </div>

      {/* Breve descrizione e call-to-action */}
      <div className="home-intro">
        <p>
          Questa guida ti accompagnerà attraverso i luoghi più iconici di
          Alghero: dai ristoranti dove assaporare la cucina tipica sarda,
          alle spiagge più belle dove rilassarti, fino ai locali per la vita
          notturna. Clicca uno dei pulsanti qui sotto per iniziare!
        </p>
        <div className="home-buttons">
          <a href="/ristoranti" className="btn-home">
            Ristoranti
          </a>
          <a href="/spiagge" className="btn-home">
            Spiagge
          </a>
          <a href="/vita-notturna" className="btn-home">
            Vita Notturna
          </a>
        </div>
      </div>
    </div>
  );
}