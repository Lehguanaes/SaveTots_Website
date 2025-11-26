import { useState } from "react";
import { NavLink } from "react-router-dom";
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

        {/* Toggle — desktop only */}
        <button
          className="site-navbar__toggle"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className={`site-navbar__nav ${open ? "site-navbar__nav--open" : ""}`}>
          <ul className="site-navbar__list">
            
            {/* HOME */}
            <li className="site-navbar__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `site-navbar__link ${isActive ? "active" : ""}`
                }
              >
                <span className="mobile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" 
                      stroke="#c45541" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Home
              </NavLink>
            </li>

            {/* SOBRE */}
            <li className="site-navbar__item">
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `site-navbar__link ${isActive ? "active" : ""}`
                }
              >
                <span className="mobile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#c45541" strokeWidth="2"/>
                    <line x1="12" y1="10" x2="12" y2="16"
                      stroke="#c45541" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="7" r="1" fill="#c45541"/>
                  </svg>
                </span>
                Sobre Nós
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}