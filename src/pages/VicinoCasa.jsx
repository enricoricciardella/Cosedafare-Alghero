import React from "react";
import RistoranteCard from "../components/RistoranteCard"; // riusa il componente card

export default function VicinoCasa() {
  // Array di servizi vicino a casa
  const servizi = [
      {
        nome: "Il Golosone Gastronomia ",
        descrizione: "Specialità locali e piatti pronti da asporto, panini, lasagne,tramezzini, qualsiasi cosa di sfizioso a un passo da casa!",
        immagine: "../public/Golosone.png",
        link: "https://g.co/kgs/1wLMwep",
      },
    {
      nome: "Alice's Cofè",
      descrizione: "Caffetteria e bar per colazioni a 2 minuti da casa.",
      immagine: "../public/colazione.jpg",
      link: "https://maps.app.goo.gl/QyE9gpEG6suo9xwD9",
    },
    {
      nome: "Il Veliero Bar enoteca",
      descrizione: "Letteralmente sotto casa, bar e enoteca con vini locali.",
      immagine: "../public/veliero.png",
      link: "https://maps.app.goo.gl/rH6mbLmBNx8wppUS9",
    },
    {
      nome: "A tutta frutta!",
      descrizione: "Frutta e verdura fresca sotto casa, ideale per una dieta sana.",
      immagine: "../public/frutta.jpeg",
      link: "https://maps.app.goo.gl/ZtMid7K9ieYZsv8h9",
    },
    {
      nome: "Macelleria Da Marco",
      descrizione: "Macelleria sotto casa con carni fresche e prodotti tipici locali.",
      immagine: "../public/macelleria.jpg",
      link: "https://maps.app.goo.gl/iE1NDbKahETi8kYs9",
    },
        {
      nome: "Sidis Supermarket",
      descrizione: "Supermercato a 5 minuti a piedi per tutte le necessità quotidiane.",
      immagine: "../public/market.jpeg",
      link: "https://maps.app.goo.gl/xWCTRBha27A3dGjd6",
    },
        {
      nome: "Farmacia Cargiaghe",
      descrizione: "Farmacia a 5 minuti a piedi per tutte le necessità mediche.",
      immagine: "../public/farmacia.jpg",
      link: "https://maps.app.goo.gl/jzaxmg19FTZSaikq8",
    },
    // aggiungi altri servizi...
  ];

  return (
    <div className="servizi-page">
      <h2 className="servizi-title">Servizi Vicino a Casa</h2>
      <p className="servizi-subtitle">
        Trova bar, gastronomie, farmacie, fermate e molto altro a pochi passi.
      </p>
      <div className="grid-servizi">
        {servizi.map((s, idx) => (
          <RistoranteCard
            key={idx}
            nome={s.nome}
            descrizione={s.descrizione}
            immagine={s.immagine}
            link={s.link}
            contatto={""} // se non serve, lascia in bianco
          />
        ))}
      </div>
    </div>
  );
}