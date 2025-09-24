import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Funcionalidades from "./pages/Funcionalidades";
import Sobre from "./pages/Sobre";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <h2 className="nav-logo">Memória Ativa</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/funcionalidades">Funcionalidades</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
          </ul>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}
