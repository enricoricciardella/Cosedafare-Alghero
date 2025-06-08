// src/pages/Ristoranti.jsx
import React from "react";
import RistoranteCard from "../components/RistoranteCard";

export default function Ristoranti() {
  const ristoranti = [
    {
      nome: "Mabrouk",
      descrizione:
        "Ristorante a gestione familiare, 3 tipi di menù fissi, pesce super fresco e astice alla catalana.",
      immagine:
        "../public/mabrouck.webp",
      link: "https://maps.app.goo.gl/CQicnME5oWwEcfbm7",
      contatto: "079 970000",
    },
    {
      nome: "Pesce d’Oro",
      descrizione:
        "Tutte le specialità di mare! Rapporto qualità/prezzo imbattibile e nella media.",
      immagine:
        "../public/pescedoro.webp",
      link: "https://maps.google.com/?q=Pesce+d’Oro+Alghero",
      contatto: "079 952602",
    },
    {
      nome: "Focacceria Milese",
      descrizione:
        "Famose e storiche focacce algheresi, è vietato visitare Alghero senza mangiare una focaccia qui o da portare al mare!",
      immagine:
        "../public/milese.webp",
      link: "https://www.barmilese.it/",
      contatto: "079 952419",
    },
    {
      nome: "La Lanterna",
      descrizione: "Pizza e cucina tipica a due passi da casa.",
      immagine:
        "../public/lanterna.jpg",
      link: "https://maps.app.goo.gl/2DZCRen7Lu8HHjmg9",
      contatto: "079 978556",
    },
    {
      nome: "Aragon Ristorante/Pizzeria",
      descrizione:
        "Ottimo Ristorante/Pizzeria a 10 minuti da casa, sulla passeggiata.",
      immagine:
        "../public/aragon.webp",
      link: "https://www.ristorantearagon.com/",
      contatto: "079 973 1001",
    },
    {
      nome: "Nautilus",
      descrizione:
        "Vista spettacolare sul mare, ottimo per una cena romantica. Prezzo un po' più alto della media.",
      immagine:
        "../public/nautilus.webp",
      link: "https://www.nautilusalghero.it/",
      contatto: "333 430 0979",
    },
    {
      nome: "Miramare",
      descrizione:
        "Ristorante/pizzeria sulla passeggiata ai bastioni, ottimo per fare un giro nel centro storico dopo cena.",
      immagine:
        "../public/miramare.webp",
      link: "https://maps.app.goo.gl/aSD4YJk35Y3WYQKL7",
      contatto: "079 933 6002",
    },
    {
      nome: "Cohiba, Fertilia",
      descrizione:
        "Ristorante/pizzeria/piatti composti/panini/bruschette. Praticamente puoi mangiare qualsiasi cosa! Ottimo se arrivi dall'aeroporto o al ritorno dal mare vuoi fare un boccone al volo a Fertilia o vuoi fare un aperitivo.",
      immagine:
        "../public/miramare.webp",
      link: "https://www.cohibafertilia.it/",
      contatto: "079 932004",
    },
  ];

  return (
    <div>
      <h2 style={{ marginTop: "3rem", textAlign: "center" }}>
        Ristoranti strettamente consigliati! 🦞🐟
      </h2>
      <p style={{ padding: "2rem", textAlign: "center" }}>
        {" "}
        <em>
          Qui troverai i migliori posti dove mangiare ad Alghero, specialmente
          perchè frequentati da noi local!
        </em>
      </p>

      {/* Griglia statica 3‐3‐2 su schermi grandi */}
      <div className="grid-ristoranti">
        {ristoranti.map((r, i) => (
          <RistoranteCard
            key={i}
            nome={r.nome}
            descrizione={r.descrizione}
            immagine={r.immagine}
            link={r.link}
            contatto={r.contatto}
          />
        ))}
      </div>
    </div>
  );
}
