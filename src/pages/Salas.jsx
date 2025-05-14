import React, { useState } from "react";

function Salas() {
  const [nome, setNome] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [mensagem, setMensagem] = useState(""); // Estado para a mensagem de sucesso ou erro

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !capacidade) {
      setMensagem("Todos os campos são obrigatórios!");
      return;
    }

    // Criando o objeto sala
    const sala = { nome, capacidade };
    
    // Carregar salas do localStorage
    const salasSalvas = JSON.parse(localStorage.getItem("salas") || "[]");
    
    // Adicionar a nova sala ao array
    salasSalvas.push(sala);
    
    // Salvar de volta no localStorage
    localStorage.setItem("salas", JSON.stringify(salasSalvas));

    // Resetar os valores dos inputs
    setNome("");
    setCapacidade("");
    setMensagem("Sala cadastrada com sucesso!"); // Mensagem de sucesso
  };

  return (
    <main className="container my-5">
      <h1 className="text-center mb-3">Cadastro de Salas</h1>

      {/* Botão para abrir o modal */}
      <button className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#modalSala">
        ➕ Nova Sala
      </button>

      {/* Modal */}
      <div className="modal fade" id="modalSala" tabIndex="-1" aria-labelledby="modalSalaLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="modalSalaLabel">Nova Sala</h5>
                {/* Botão de Fechar "X" que usa o fechamento padrão do Bootstrap */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="nome" className="form-label">Nome da Sala</label>
                  <input
                    type="text"
                    id="nome"
                    className="form-control"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="capacidade" className="form-label">Capacidade</label>
                  <input
                    type="number"
                    id="capacidade"
                    className="form-control"
                    value={capacidade}
                    onChange={(e) => setCapacidade(e.target.value)}
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

      {/* Exibir mensagem de sucesso ou erro */}
      {mensagem && <div className="alert alert-info">{mensagem}</div>}
    </main>
  );
}

export default Salas;
