import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CadastrarSala() {
  const [numero, setNumero] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sala = { numero, capacidade, tipo };
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");
    salas.push(sala);
    localStorage.setItem("salas", JSON.stringify(salas));
    setNumero(""); setCapacidade(""); setTipo("");
    const modal = bootstrap.Modal.getInstance(document.getElementById("salaModal"));
    modal.hide();
  };

  return (
    <div className="container mt-5">
      <h2>Cadastro de Sala</h2>
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#salaModal">
        Cadastrar Sala
      </button>
      <div className="modal fade" id="salaModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"><h5 className="modal-title">Nova Sala</h5></div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input className="form-control mb-2" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} required />
                <input className="form-control mb-2" placeholder="Capacidade" value={capacidade} onChange={(e) => setCapacidade(e.target.value)} required />
                <input className="form-control mb-2" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
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
export default CadastrarSala;
