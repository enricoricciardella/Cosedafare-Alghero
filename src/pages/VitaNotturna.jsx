import React from "react";
import RistoranteCard from "../components/RistoranteCard";

const localiNotturni = [
  {
    tipo: "Lounge Bar",
    nome: "Riservato",
    descrizione: "Lounge bar sul mare, aperitivi al tramonto! Il mio preferito.",
    immagine: "https://static.wixstatic.com/media/effdb1_e6b5e3ddf99c416080c0e3a63cf111f1~mv2.jpg/v1/fill/w_1621,h_1158,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/effdb1_e6b5e3ddf99c416080c0e3a63cf111f1~mv2.jpg",
    contatto: "331 561 4121",
    link: "https://www.riservatobeachbar.com/",
  },
   {
    tipo: "Lounge Bar",
    nome: "Maracaibo",
    descrizione: "Famoso Lounge bar sul lido, aperitivi e drink sul mare.",
    immagine: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqrT1UzNuI-pz1jraeoxmO7wgNZNriiu1yCLFTNySjmur0Gllo_Zxiu8w2hc9M7LsGZsXDJXpCRz7L6XrO62Rje_4lbhNULuYFa3q37Bc3MF435ZbgrlYLo-eMPNVfP_VnGugFL=s1360-w1360-h1020-rw",
    link: "https://maps.app.goo.gl/zd6iVhqir9jCDB5F9",
    contatto: "349 406 1294",
  },
   {
    tipo: "Lounge Bar",
    nome: "Bahia Beach Club",
    descrizione: "Trend fra i locali notturni e non, con aperitivi e musica dal vivo. Consigliato per la sua atmosfera.",
    immagine: "https://lh3.googleusercontent.com/p/AF1QipOrTnzGnphFykSBy8elUUzhnGVStsP_GlJmAvht=s1360-w1360-h1020-rw",
    link: "https://maps.app.goo.gl/tu9o8qCToQdDr1C26",
    contatto: "342 832 8424",
  },
 {
    tipo: "Lounge Bar",
    nome: "Hotel Margherita Lounge Bar panoramico",
    descrizione: "A 5 minuti a piedi da casa, il bar panoramico dell'hotel Margherita offre una vista mozzafiato sulla città vecchia e sul mare.",
    immagine: "https://lh3.googleusercontent.com/p/AF1QipMFnBkD0MwP0DTJkz89LtAS08bwfOJnwQy1mTa6=s1360-w1360-h1020-rw",
    link: "https://maps.app.goo.gl/aHBKHrYTbxKUaQmK8",
    contatto: "079979006",
  },
  {
    tipo: "Lounge Bar",
    nome: "Rafel Restaurant & Lounge Bar",
    descrizione: "Elegante lounge bar sulla sabbia, perfetto per aperitivi e cene romantiche. Spiaggia attrezzata.",
    immagine: "https://lh3.googleusercontent.com/p/AF1QipOMNpzMiPCnRLhFf7Dt6xweb0cbd1_fqy9Yf9Gm=s1360-w1360-h1020-rw",
    link: "https://maps.app.goo.gl/Xjvr8FQ5twYxxgMD8",
    contatto: "338 135 9465",
  },
  {
    tipo: "Lounge Bar",
    nome: "Il Chiosco",
    descrizione: "Ottimo per colazioni o aperitivi, con una vista spettacolare sulla spiaggia e sul castello di Las Tronas.",
    immagine: "https://cdn.website.dish.co/media/ed/bb/6687907/Il-Chiosco-WhatsApp-Image-2023-06-07-at-14-20-25-1-jpeg.jpg",
    link: "https://maps.app.goo.gl/vs56V13m2rBAjhoNA",
    contatto: "346 872 7770",
    // fine lounge bar
  },
  // discoteche
   {
    tipo: "Discoteca",
    nome: "Maden Events",
    descrizione: "Discoteca trend di Alghero, con eventi e serate a tema. Super consigliata!",
    immagine: "https://lh3.googleusercontent.com/p/AF1QipNc-pjRMJta-1styvG4znyGAnBDaOPHhxqLZNFo=s1360-w1360-h1020-rw",
    link: "https://www.instagram.com/maden_events?utm_source=ig_web_button_share_sheet&igsh=MTV1MXhmb3V4OW42Zg==",
    contatto: "348 642 0687",
  },
    {
    tipo: "Discoteca",
    nome: "Touch on the Beach",
    descrizione: "Discoteca sul mare verso Fertilia, ragazzi di età giovane, serate che vanno dai classici al rap.",
    immagine: "/src/public/touch.jpg",
    link: "https://maps.app.goo.gl/wRMyt4ZGKMsACgX37" 
 },
  {
    tipo: "Discoteca",
    nome: " Il Ruscello",
    descrizione: "Discoteca storica di Alghero",
    immagine: "https://lh3.googleusercontent.com/p/AF1QipOlPa1ZD76y2OcXuEsar712DiEKGdncaL5wfRYv=s1360-w1360-h1020-rw",
    link: "https://maps.app.goo.gl/zrAPLK4rmCc3ejDq6",
    contatto: "345 907 5072"
 }
  
];

export default function VitaNotturna() {
  const lounge = localiNotturni.filter((l) => l.tipo === "Lounge Bar");
  const discoteche = localiNotturni.filter((l) => l.tipo === "Discoteca");

  return (
    <div style={{ padding: "2rem", fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#002B5B", padding: "1.6rem" }}>
        Vita Notturna ad Alghero
      </h2>

      {/* Sezione Lounge Bar */}
      <h3 style={{ marginBottom: "1rem", color: "#0056b3", textAlign:'center' }}>Lounge Bar</h3>
      <div className="grid-lounge">
        {lounge.map((locale, idx) => (
          <RistoranteCard
            key={idx}
            nome={locale.nome}
            descrizione={locale.descrizione}
            immagine={locale.immagine}
            link={locale.link}
            contatto={locale.contatto}
          />
        ))}
      </div>

      {/* Sezione Discoteche */}
      <h3 style={{ marginBottom: "1rem", color: "#0056b3", textAlign:'center' }}>Discoteche</h3>
      <div className="grid-discoteche">
        {discoteche.map((locale, idx) => (
          <RistoranteCard
            key={idx}
            nome={locale.nome}
            descrizione={locale.descrizione}
            immagine={locale.immagine}
            link={locale.link}
            contatto={locale.contatto}
          />
        ))}
      </div>
      <p style={{marginTop: "3rem", textAlign: "center"}}> <em>( Naturalmente anche nei lounge bar è possibile ballare, generalmente a partire da una certa ora fino a chiusura. Ad esempio, al Bahia la musica si interrompe intorno alle 03:00, mentre al Riservato termina verso l’01:30/02:00. )</em></p>
    </div>
  );
}