import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CadastrarFilme from './features/filmes/pages/CadastrarFilme';
import RegistrarIngresso from './features/ingressos/pages/RegistrarIngresso';
import CadastrarSala from './features/salas/pages/CadastrarSala';
import CadastrarSessao from './features/sessoes/pages/CadastrarSessao';
import ListarSessoes from './features/ListarSessoes/pages/ListarSessoes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/filmes" element={<CadastrarFilme />} />
          <Route path="/ingressos" element={<RegistrarIngresso />} />
          <Route path="/salas" element={<CadastrarSala />} />
          <Route path="/sessoes" element={<CadastrarSessao />} />
          <Route path="/listar-sessoes" element={<ListarSessoes />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
