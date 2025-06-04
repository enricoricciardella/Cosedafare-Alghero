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
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqJhtb6XHYTFeHiPGyl8QtsmWa-FLJBKxgftsFOQnorwY3bNXd-EujxV5PSRwS4M3UGfdTjMZZ7LKZfzfr0tLgbNYkIZgxe6ZJjmzHm2Eq77Rn7-KEoASg6icw3XRyXY7cex-lCMg=s1360-w1360-h1020-rw",
      link: "https://maps.app.goo.gl/CQicnME5oWwEcfbm7",
      contatto: "079 970000",
    },
    {
      nome: "Pesce d’Oro",
      descrizione:
        "Tutte le specialità di mare! Rapporto qualità/prezzo imbattibile e nella media.",
      immagine:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npJsiAjX-Xkg4Pi8HKEPcy_WrfRGrEOkfUrne-yaMZrLEB5Nz2gKD5Z9VQBtl0M68Zt00ITsTC4ruc0nSczAg2rev_M85hDfYifvYZcs0oM2tv87nsjkh8wcxhuhbhz0OiozQLF=s1360-w1360-h1020-rw",
      link: "https://maps.google.com/?q=Pesce+d’Oro+Alghero",
      contatto: "079 952602",
    },
    {
      nome: "Focacceria Milese",
      descrizione:
        "Famose e storiche focacce algheresi, è vietato visitare Alghero senza mangiare una focaccia qui o da portare al mare!",
      immagine:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrQDRuchZ_vz5gr0G7FQlZAcXZgV2ALdZOv3uI1cjvrV6Vq-6mNeiXj9vIY4mJ1vSp8fOS3enzp6Ovm2DueOwSo8qv-0aAYoGIy1OKtyI-04HJ4z3WbRjd5oI2G8Q1h7qGe7TFR=s1360-w1360-h1020-rw",
      link: "https://www.barmilese.it/",
      contatto: "079 952419",
    },
    {
      nome: "La Lanterna",
      descrizione: "Pizza e cucina tipica a due passi da casa.",
      immagine:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ee/ea/e2/antipasto-prosciutto.jpg?w=700&h=-1&s=1",
      link: "https://maps.app.goo.gl/2DZCRen7Lu8HHjmg9",
      contatto: "079 978556",
    },
    {
      nome: "Aragon Ristorante/Pizzeria",
      descrizione:
        "Ottimo Ristorante/Pizzeria a 10 minuti da casa, sulla passeggiata.",
      immagine:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nquDfCLj6loSULIEEah0lVOeMnkCK9ca_3eEH2Of6K_hwuxvAjWhQ5Ok5YpOmOYHyXt6-rwjrp_lrfzUfqNOI2R2BJ-eAFxyRELlx3npKnGwY95yf6VzjhZmj3HJoo8rRptunfW2w=s1360-w1360-h1020-rw",
      link: "https://www.ristorantearagon.com/",
      contatto: "079 973 1001",
    },
    {
      nome: "Nautilus",
      descrizione:
        "Vista spettacolare sul mare, ottimo per una cena romantica. Prezzo un po' più alto della media.",
      immagine:
        "https://lh3.googleusercontent.com/p/AF1QipMJywz6T09j6G08s8dk_OSp7L7rzS1ZMiGlFjhD=s1360-w1360-h1020-rw",
      link: "https://www.nautilusalghero.it/",
      contatto: "333 430 0979",
    },
    {
      nome: "Miramare",
      descrizione:
        "Ristorante/pizzeria sulla passeggiata ai bastioni, ottimo per fare un giro nel centro storico dopo cena.",
      immagine:
        "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr0lSW-sLDih4ANaLXjbcWslsyABwZ_TcPLph4oAKaY9xivLFqMgQywupek6ANaMWASoVxHojuQXzAUNEBn04YhQmxkDy6upiA_IbDUVDrhfhPhZuTGbNcrikHQv2jkNRAoaQYVgBA4suo=s1360-w1360-h1020-rw",
      link: "https://maps.app.goo.gl/aSD4YJk35Y3WYQKL7",
      contatto: "079 933 6002",
    },
    {
      nome: "Cohiba, Fertilia",
      descrizione:
        "Ristorante/pizzeria/piatti composti/panini/bruschette. Praticamente puoi mangiare qualsiasi cosa! Ottimo se arrivi dall'aeroporto o al ritorno dal mare vuoi fare un boccone al volo a Fertilia o vuoi fare un aperitivo.",
      immagine:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/15/4c/22/photo1jpg.jpg?w=1000&h=-1&s=1",
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
