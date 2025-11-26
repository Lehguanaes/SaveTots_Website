import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <div className="site-navbar__brand">
          <img src={logo} alt="SaveTots Logo" className="site-logo" />
        </div>

        <button
          className="site-navbar__toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={`site-navbar__nav ${open ? "site-navbar__nav--open" : ""}`}>
          <ul className="site-navbar__list">
            <li className="site-navbar__item">
              <Link to="/" className="site-navbar__link">Home</Link>
            </li>
            <li className="site-navbar__item">
              <Link to="/sobre" className="site-navbar__link">Sobre Nós</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
