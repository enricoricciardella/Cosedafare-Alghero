import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
  
        <div className="footer-copy">
          © {new Date().getFullYear()} Luelen &amp; Al 205. Tutti i diritti riservati.
        </div>
              <address className="footer-contacts">
            <div>
              <span role="img" aria-label="telefono">📞</span>{" "}
              Enrico: <a href="tel:+39123456789">+39 3496253948</a>
            </div>
            <div>
              <span role="img" aria-label="telefono">📞</span>{" "}
              Luisanna: <a href="tel:+39123456789">+39 3289519756</a>
            </div>
          </address>
                  <div className="footer-copy">
          App created by Enrico Ricciardella
        </div>
    
      </div>
    </footer>
  );
}
