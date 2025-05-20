import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Cinema</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/filmes">Cadastrar Filmes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ingressos">Registrar Venda de Ingressos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/salas">Cadastrar Sala</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sessoes">Cadastrar Sessões</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listar-sessoes">Listar Sessões</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
