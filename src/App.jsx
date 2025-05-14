import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Filmes from "./pages/Filmes";
import Salas from "./pages/Salas";
import Sessoes from "./pages/Sessoes";
import Ingressos from "./pages/Ingressos";
import ListarSessoes from "./pages/ListarSessoes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cadastro-filmes" element={<Filmes />} />
        <Route path="/cadastro-salas" element={<Salas />} />
        <Route path="/cadastro-sessoes" element={<Sessoes />} />
        <Route path="/venda-ingressos" element={<Ingressos />} />
        <Route path="/sessoes" element={<ListarSessoes />} />
      </Routes>
    </Router>
  );
}

export default App;
