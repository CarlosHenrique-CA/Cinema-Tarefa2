import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CadastrarFilme() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [genero, setGenero] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [duracao, setDuracao] = useState("");
  const [estreia, setEstreia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filme = { titulo, descricao, genero, classificacao, duracao, estreia };
    const filmesSalvos = JSON.parse(localStorage.getItem("filmes") || "[]");
    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    setTitulo(""); setDescricao(""); setGenero(""); setClassificacao(""); setDuracao(""); setEstreia("");
    const modal = bootstrap.Modal.getInstance(document.getElementById("filmeModal"));
    modal.hide();
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Filme</h2>
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filmeModal">
        Cadastrar Filme
      </button>
      <div className="modal fade" id="filmeModal" tabIndex="-1" aria-labelledby="filmeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Novo Filme</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body row g-3">
                <div className="col-md-6"><input className="form-control" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required /></div>
                <div className="col-md-6"><input className="form-control" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required /></div>
                <div className="col-md-4"><input className="form-control" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} required /></div>
                <div className="col-md-4"><input className="form-control" placeholder="Classificação" value={classificacao} onChange={(e) => setClassificacao(e.target.value)} required /></div>
                <div className="col-md-4"><input className="form-control" placeholder="Duração" value={duracao} onChange={(e) => setDuracao(e.target.value)} required /></div>
                <div className="col-md-6"><input type="date" className="form-control" value={estreia} onChange={(e) => setEstreia(e.target.value)} required /></div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-success">Salvar Filme</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrarFilme;
