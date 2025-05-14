import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-decoration-none fs-2">MyCinema</Link>
        <nav className="d-none d-lg-block">
          <ul className="nav gap-4">
            <li className="nav-item">
              <Link to="/cadastro-filmes" className="nav-link">Cadastro de Filmes</Link>
            </li>
            <li className="nav-item">
              <Link to="/cadastro-salas" className="nav-link">Cadastro de Salas</Link>
            </li>
            <li className="nav-item">
              <Link to="/cadastro-sessoes" className="nav-link">Cadastro de Sessões</Link>
            </li>
            <li className="nav-item">
              <Link to="/venda-ingressos" className="nav-link">Venda de Ingressos</Link>
            </li>
            <li className="nav-item">
              <Link to="/sessoes" className="nav-link">Listar Sessões</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
