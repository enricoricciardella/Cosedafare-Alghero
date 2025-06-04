import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#0088cc",
        color: "white",
      }}>
      <h1>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Che fare ad Alghero?</Link>
      </h1>
      <h5 style={{ color: "white", textDecoration: "none" }}>Luelen & Al 205</h5>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link
          to="/ristoranti"
          style={{ color: "white", textDecoration: "none" }}> Ristoranti</Link>
        <Link to="/spiagge" style={{ color: "white", textDecoration: "none" }}>Spiagge</Link>
          <Link to="/vita-notturna" style={{ color: "white", textDecoration: "none" }}>
          Vita Notturna
        </Link>

        <button>ITA</button>
        <button>EN</button>
        <button>ES</button>
      </div>
    </nav>
  );
}
