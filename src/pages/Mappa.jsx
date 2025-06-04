import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const normalIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  iconSize: [24, 39],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const highlightedIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Spiagge() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  // Array di ref per i marker delle spiagge
  const markerRefs = useRef([]);

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

  const spiagge = [
    {
      nome: "Le Bombarde",
      posizione: [40.58435145908963, 8.25872445269415],
    },
    {
      nome: "Il Lazzaretto",
      posizione: [40.58254939057573, 8.247112770460463],
    },
    {
      nome: "Mugoni",
      posizione: [40.618099561491164, 8.201231255667224],
    },
    {
      nome: "La Speranza",
      posizione: [40.50141007885005, 8.338779429353558],
    },
    {
      nome: "Stintino (Spiaggia della Pelosa)",
      posizione: [40.96606674087806, 8.209487026322204],
    },
  ];

  return (
    <MapContainer center={centroMappa} zoom={11} style={{ height: "500px" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {spiagge.map((spiaggia, index) => (
        <Marker
          key={index}
          position={spiaggia.posizione}
          icon={index === activeIndex ? highlightedIcon : normalIcon}
          eventHandlers={{
            click: () => {
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
          <Popup>{spiaggia.nome}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}