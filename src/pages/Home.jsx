// src/pages/VitaNotturna.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import RistoranteCard from "../components/RistoranteCard";
import "../index.css";

export default function Home() {
  const beachSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <main className="home-page">
      <br />
      <h1 className="home-tour-title">Dove andare ad Alghero 🔎</h1>
      {/* Hero Video Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          src="public/video/GheroXsito.mp4"
          autoPlay
          loop
          muted
        />
        <div className="hero-overlay" />
        <div className="hero-card">
          <h2 className="home-title"> Scopri...</h2>
          <p className="home-subtitle">
            Spiagge, ristoranti, vita notturna e servizi vicino a casa nel
            dettaglio!
          </p>
          <div className="hero-buttons">
            <Link to="/spiagge" className="btn-home">
              Spiagge
            </Link>
            <Link to="/ristoranti" className="btn-home">
              Ristoranti
            </Link>
            <Link to="/vita-notturna" className="btn-home">
              Vita Notturna
            </Link>
            <Link to="/vicino-casa" className="btn-home">
              Vicino a casa
            </Link>
          </div>
        </div>
      </section>
      
      
      {/* Anteprima Spiagge */}
      <section className="home-preview-beaches">
        <div className="home-preview-split">
          <div className="home-preview-carousel">
            <Slider {...beachSettings}>
              <div>
                <img
                  src="/bombarde.webp"
                  alt="Bombarde"
                  className="preview-slide-img"
                />
              </div>
              <div>
                <img
                  src="/Mugoni2.webp"
                  alt="Mugoni"
                  className="preview-slide-img"
                />
              </div>
              <div>
                <img
                  src="/lazzaretto22222.png"
                  alt="Lazzaretto"
                  className="preview-slide-img"
                />
              </div>
            </Slider>
          </div>
          <div className="home-preview-info">
            <h3 className="home-beach-titles">🏖️ Spiagge da non perdere</h3>
            <p className="home-preview-subtitle">
              Dai uno sguardo rapido alle meraviglie costiere.
            </p>
            <Link to="/spiagge" className="btn-home">
              Scopri tutte le spiagge!
            </Link>
          </div>
        </div>
      </section>

      {/* Anteprima Ristoranti */}
      <section className="home-best-restaurants">
        <h3 className="home-best-title">🍽️ I ristoranti consigliati</h3>
        <div className="home-best-grid">
          <RistoranteCard
            nome="Mabrouk"
            immagine="/mabrouck.webp"
            descrizione="Ristorante a gestione familiare, pesce fresco e astice alla catalana."
            link="https://maps.app.goo.gl/CQicnME5oWwEcfbm7"
            contatto="079 970000"
          />
          <RistoranteCard
            nome="Pesce d’Oro"
            immagine="/pescedoro.webp"
            descrizione="Specialità di mare con ottimo rapporto qualità/prezzo."
            link="https://maps.google.com/?q=Pesce+d’Oro+Alghero"
            contatto="079 952602"
          />
          <RistoranteCard
            nome="Nautilus"
            immagine="/nautilus.webp"
            descrizione="Vista sul mare per cene romantiche, prezzo medio-alto."
            link="https://www.nautilusalghero.it/"
            contatto="333 430 0979"
          />
        </div>
        <div className="home-buttons">
          <Link to="/ristoranti" className="btn-home">
            Scopri tutti i ristoranti
          </Link>
        </div>
      </section>

      {/* Anteprima Vita Notturna */}
      <section>
        <div className="nightlife-content">
          {/* Stelle cadenti */}
          <div className="stars">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
          <h3 className="home-preview-title">🌌 Vita Notturna</h3>
          <div className="nightlife-cards">
            <div
              className="nightlife-card"
              style={{ backgroundImage: "url('/Riservato.avif')" }}
            >
              <h4>Il Riservato</h4>
            </div>
            <div
              className="nightlife-card"
              style={{ backgroundImage: "url('/bahia.webp')" }}
            >
              <h4>Bahia Beach Club</h4>
            </div>
            <div
              className="nightlife-card maden-centered"
              style={{ backgroundImage: "url('/maden+.webp')" }}
            >
              <h4>Il Maden</h4>
            </div>
          </div>
          <div className="btn-nightlife-wrapper">
            <Link to="/vita-notturna" className="btn-home">
              Scopri la Vita Notturna
            </Link>
          </div>
        </div>
      </section>

      {/* Anteprima Servizi Vicino a Casa */}
      <section className="home-services-preview">
        <h3 className="services-preview-title">🏠 Servizi Vicino a Casa</h3>
        <div className="services-ovals">
          <a
            href="https://maps.app.goo.gl/QyE9gpEG6suo9xwD9"
            className="service-oval"
          >
            <div className="service-icon">🥐</div>
            <div className="service-title">Bar</div>
            <div className="service-overlay">
              Caffetteria e bar per colazioni a 2 minuti da casa.
            </div>
          </a>
          <a
            href="https://maps.app.goo.gl/xWCTRBha27A3dGjd6"
            className="service-oval"
          >
            <div className="service-icon">🛒</div>
            <div className="service-title">Supermercato</div>
            <div className="service-overlay">
              Supermercato a 5 minuti a piedi per necessità quotidiane.
            </div>
          </a>
          <a
            href="https://maps.app.goo.gl/jzaxmg19FTZSaikq8"
            className="service-oval"
          >
            <div className="service-icon">💊</div>
            <div className="service-title">Farmacia</div>
            <div className="service-overlay">
              Farmacia a 5 minuti a piedi per tutte le necessità mediche.
            </div>
          </a>
          <Link to="/vicino-casa" className="service-oval">
            <div className="service-icon">📋</div>
            <div className="service-title">Tutti i servizi</div>
            <div className="service-overlay">
              Scopri tutti i servizi disponibili vicino a te.
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
