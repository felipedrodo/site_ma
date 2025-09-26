import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="brand">
        <div className="imgnav">
            <img src={logoImg} alt="Memória Ativa logo" />
        </div>  
      </div>

      <nav>
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/funcionalidades" onClick={() => setOpen(false)}>Funcionalidades</Link></li>
          <li><Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
}
