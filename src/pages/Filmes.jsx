import React, { useState } from "react";

function Filmes() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [genero, setGenero] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [duracao, setDuracao] = useState("");
  const [estreia, setEstreia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filme = { titulo, descricao, genero, classificacao, duracao, estreia };
    
    // Carregar filmes do localStorage
    const filmesSalvos = JSON.parse(localStorage.getItem("filmes") || "[]");
    
    // Adicionar o novo filme ao array
    filmesSalvos.push(filme);
    
    // Salvar de volta no localStorage
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));

    // Resetar os valores dos inputs
    setTitulo("");
    setDescricao("");
    setGenero("");
    setClassificacao("");
    setDuracao("");
    setEstreia("");

    alert(`Filme ${titulo} cadastrado com sucesso!`);
  };

  return (
    <main className="container my-5">
      <h1 className="text-center mb-3">Cadastro de Filmes</h1>
      
      {/* Botão para abrir o modal */}
      <button className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#modalFilme">
        ➕ Novo Filme
      </button>

      {/* Modal */}
      <div className="modal fade" id="modalFilme" tabIndex="-1" aria-labelledby="modalFilmeLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="modalFilmeLabel">Novo Filme</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label">Título</label>
                  <input
                    type="text"
                    id="titulo"
                    className="form-control"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descricao" className="form-label">Descrição</label>
                  <textarea
                    id="descricao"
                    className="form-control"
                    rows="3"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="genero" className="form-label">Gênero</label>
                  <select
                    id="genero"
                    className="form-select"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="acao">Ação</option>
                    <option value="comedia">Comédia</option>
                    <option value="drama">Drama</option>
                    <option value="terror">Terror</option>
                    <option value="romance">Romance</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="classificacao" className="form-label">Classificação</label>
                  <select
                    id="classificacao"
                    className="form-select"
                    value={classificacao}
                    onChange={(e) => setClassificacao(e.target.value)}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="livre">Livre</option>
                    <option value="10">10+</option>
                    <option value="12">12+</option>
                    <option value="14">14+</option>
                    <option value="16">16+</option>
                    <option value="18">18+</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="duracao" className="form-label">Duração (min)</label>
                  <input
                    type="number"
                    id="duracao"
                    className="form-control"
                    value={duracao}
                    onChange={(e) => setDuracao(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="estreia" className="form-label">Estreia</label>
                  <input
                    type="date"
                    id="estreia"
                    className="form-control"
                    value={estreia}
                    onChange={(e) => setEstreia(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-success">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Filmes;
