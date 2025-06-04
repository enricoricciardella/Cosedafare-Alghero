import React from "react";

export default function RistoranteCard({ nome, descrizione, immagine, link, contatto }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        borderRadius: "10px",
        overflow: "hidden",
        height: "100%",         // occupa tutto lo spazio disponibile
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Immagine con altezza fissa */}
      <div style={{ height: "120px", overflow: "hidden" }}>
        <img
          src={immagine}
          alt={nome}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Contenuto testuale */}
      <div style={{ flex: 1, padding: "0.75rem", display: "flex", flexDirection: "column" }}>
        <h3 style={{ margin: 0, marginBottom: "0.5rem", fontSize: "1.1rem", color: "#333", textAlign: "center" }}>{nome}</h3>
        <p style={{ flex: 1, margin: 0, marginBottom: "0.5rem", color: "#555", fontSize: "0.95rem" }}>
          {descrizione}
        </p>
        <p style={{ margin: 0, marginBottom: "0.5rem", color: "#555", fontSize: "0.9rem" }}>
          <strong>Contatto 📞</strong> {contatto}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "auto",
            color: "#007bff",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "0.95rem",
          }}
        >
          Visita il sito o mappa 📍
        </a>
      </div>
    </div>
  );
}