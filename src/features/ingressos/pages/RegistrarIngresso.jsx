import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function RegistrarIngresso() {
  const [cpf, setCpf] = useState("");
  const [sessao, setSessao] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingresso = { cpf, sessao, valor };
    const ingressos = JSON.parse(localStorage.getItem("ingressos") || "[]");
    ingressos.push(ingresso);
    localStorage.setItem("ingressos", JSON.stringify(ingressos));
    setCpf(""); setSessao(""); setValor("");
    const modal = bootstrap.Modal.getInstance(document.getElementById("ingressoModal"));
    modal.hide();
  };

  return (
    <div className="container mt-5">
      <h2>Registro de Ingresso</h2>
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ingressoModal">
        Registrar Ingresso
      </button>
      <div className="modal fade" id="ingressoModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"><h5 className="modal-title">Novo Ingresso</h5></div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input className="form-control mb-2" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                <input className="form-control mb-2" placeholder="Sessão" value={sessao} onChange={(e) => setSessao(e.target.value)} required />
                <input className="form-control mb-2" type="number" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)} required />
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
export default RegistrarIngresso;
