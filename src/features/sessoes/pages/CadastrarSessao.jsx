import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CadastrarSessao() {
  const [filme, setFilme] = useState("");
  const [sala, setSala] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [filmesDisponiveis, setFilmesDisponiveis] = useState([]);
  const [salasDisponiveis, setSalasDisponiveis] = useState([]);

  useEffect(() => {
    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");
    setFilmesDisponiveis(filmes);
    setSalasDisponiveis(salas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sessao = { filme, sala, data, horario };
    const sessoes = JSON.parse(localStorage.getItem("sessoes") || "[]");
    sessoes.push(sessao);
    localStorage.setItem("sessoes", JSON.stringify(sessoes));
    setFilme(""); setSala(""); setData(""); setHorario("");
    const modal = bootstrap.Modal.getInstance(document.getElementById("sessaoModal"));
    modal.hide();
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Sessão</h2>
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sessaoModal">
        Cadastrar Sessão
      </button>
      <div className="modal fade" id="sessaoModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"><h5 className="modal-title">Nova Sessão</h5></div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <select className="form-select mb-2" value={filme} onChange={(e) => setFilme(e.target.value)} required>
                  <option value="">Selecione um filme</option>
                  {filmesDisponiveis.map((f, i) => (
                    <option key={i} value={f.titulo}>{f.titulo}</option>
                  ))}
                </select>
                <select className="form-select mb-2" value={sala} onChange={(e) => setSala(e.target.value)} required>
                  <option value="">Selecione uma sala</option>
                  {salasDisponiveis.map((s, i) => (
                    <option key={i} value={s.numero}>Sala {s.numero} ({s.tipo})</option>
                  ))}
                </select>
                <input type="date" className="form-control mb-2" value={data} onChange={(e) => setData(e.target.value)} required />
                <input type="time" className="form-control mb-2" value={horario} onChange={(e) => setHorario(e.target.value)} required />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" className="btn btn-success">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrarSessao;
