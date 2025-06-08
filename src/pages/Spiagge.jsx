// src/pages/Spiagge.jsx
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

// Importo gli stili di react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importo React Leaflet e Leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Creo qui le mie icone: una normale (blu) e una evidenziata (verde)
const normalIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const highlightedIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [30, 50],
  iconAnchor: [15, 50],
  popupAnchor: [1, -44],
});

const homeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/69/69524.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [30, 30],       // dimensione dell'icona a forma di casa
  iconAnchor: [15, 30],     // punto di ancoraggio all'estremità inferiore centrale
  popupAnchor: [0, -28],    // posizione del popup rispetto all'icona
});

export default function Spiagge() {
  // Dichiaro lo stato per sapere quale slide è attiva
  const [activeIndex, setActiveIndex] = useState(0);
  // Ref per controllare il carosello
  const sliderRef = useRef(null);
  // Array di ref per i marker delle spiagge
  const markerRefs = useRef([]);

  // Definisco le spiagge con nome, coordinate, descrizione, immagine e link
  const spiagge = [
    {
      nome: "Le Bombarde",
      posizione: [40.58435145908963, 8.25872445269415],
      descrizione:
        "Una delle spiagge più famose di Alghero, acqua cristallina e sabbia dorata.",
      immagine:
        "../public/bombarde.webp",
      link: "https://maps.app.goo.gl/9tAggDrP2Wm2U5x46",
    },
    {
      nome: "Il Lazzaretto",
      posizione: [40.58254939057573, 8.247112770460463],
      descrizione: "Spiaggia incantevole con piccole calette e acqua turchese.",
      immagine:
        "../public/Lazzaretto.jpg",
      link: "https://maps.app.goo.gl/Crez8asWj81PuWSs6",
    },
    {
      nome: "Mugoni",
      posizione: [40.618099561491164, 8.201231255667224],
      descrizione:
        "Spiaggia tranquilla immersa nella pineta, ideale per le famiglie.",
      immagine:
        "../public/mugoni.jpg",
      link: "https://maps.app.goo.gl/TvM38NVSpkrX5Afu7",
    },
    {
      nome: "La Speranza",
      posizione: [40.50141007885005, 8.338779429353558],
      descrizione:
        "Spiaggia sulla strada per Bosa, con onde più mosse e paesaggio selvaggio.",
      immagine:
        "../public/speranza.jpg",
      link: "https://maps.app.goo.gl/GYwJqXMoDq9LRpvj9",
    },
    {
      nome: "Stintino (Spiaggia della Pelosa)",
      posizione: [40.96606674087806, 8.209487026322204],
      descrizione:
        "Una delle spiagge più belle d'Italia, con sabbia bianca e acqua cristallina a un'ora da Alghero.",
      immagine:
        "../public/Stintino.jpeg",
      link: "https://spiaggialapelosa.it/",
    },
  ];

  // Configuro slick con la funzione beforeChange per aggiornare activeIndex
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex);
    },
  };

  // Definisco il centro della mappa (Via Sassari 184, Alghero)
  const centroMappa = [40.55252754341155, 8.322787359989935];

  useEffect(() => {
    // Quando activeIndex cambia, apro il popup corrispondente
    const marker = markerRefs.current[activeIndex];
    if (marker) {
      marker.openPopup();
    }
    // Chiudo popup degli altri eventuali marker
    markerRefs.current.forEach((m, idx) => {
      if (m && idx !== activeIndex) {
        m.closePopup();
      }
    });
  }, [activeIndex]);

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      {/* Qui inizio il carosello: quando cambio slide, activeIndex viene aggiornato */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2rem",
          color: "#000",
          fontWeight: "600",
        }}
      >
        Spiagge Consigliate
      </h2>

      <Slider {...settings} ref={sliderRef}>
        {spiagge.map((spiaggia, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "1rem",
              margin: "0 auto",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            {/* mostro l'immagine grande */}
            <img
              src={spiaggia.immagine}
              alt={spiaggia.nome}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            {/* Il nome della spiaggia */}
            <h3 style={{ marginTop: "1rem", color: "#111", textAlign: 'center' }}>
              {spiaggia.nome}
            </h3>
            {/* La descrizione */}
            <p style={{ color: "#555", fontSize: "0.95rem", padding: "0.8rem", textAlign: 'center', }}>
              {spiaggia.descrizione}
            </p>
            {/* Il link a Google Maps rimane utile per indicazioni */}
           
          </div>
        ))}
      </Slider>

      {/* Titolo per la mappa */}
      <h2
        style={{
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "2rem",
          color: "#000",
          fontWeight: "600",
        }}
      >
        Mappa Interattiva📍
      </h2>

      {/* Qui creo la mappa con React Leaflet */}
      <MapContainer
        center={centroMappa}
        zoom={11}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%", margin: "1rem auto 0 auto" }}
      >
        {/* Uso CartoDB Positron per uno stile chiaro */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* Marker CASA (sempre blu) */}
        <Marker position={centroMappa} icon={homeIcon}>
          <Popup maxWidth={150}>Casa 🏡</Popup>
        </Marker>
        {/* Marker SPIAGGE: se index === activeIndex, faccio il marker verde */}
        {spiagge.map((spiaggia, index) => (
          <Marker
            key={index}
            position={spiaggia.posizione}
            icon={index === activeIndex ? highlightedIcon : normalIcon}
            eventHandlers={{
              click: () => {
                // Quando clicco sul marker, vado alla slide corrispondente
                setActiveIndex(index);
                if (sliderRef.current) {
                  sliderRef.current.slickGoTo(index);
                }
              },
            }}
            ref={(el) => {
              // Registro il ref del marker in posizione index
              markerRefs.current[index] = el;
            }}
          >
            <Popup maxWidth={150}>
              <div style={{ textAlign: "center" }}>
                <strong>{spiaggia.nome}</strong><br />
                <a
                  href={spiaggia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0056b3", textDecoration: "none", marginTop: "0.5rem", display: "inline-block" }}
                >
                  Vai alla destinazione
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

// Definisco le frecce personalizzate per il carosello
function PrevArrow(props) {
  const { className, style, onClick } = props;
  // Io disegno solo una freccia "◀"
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-30px",
        zIndex: 10,
        fontSize: "30px",
        color: "#002B5B",
      }}
      onClick={onClick}
    >
      
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  // E qui disegno la freccia "▶"
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-30px",
        zIndex: 10,
        fontSize: "30px",
        color: "#002B5B",
      }}
      onClick={onClick}
    >
      
    </div>
  );
}
