import React, { useState, useEffect } from "react";

function Sessoes() {
  const [filmeIndex, setFilmeIndex] = useState("");
  const [salaIndex, setSalaIndex] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);
  const [mensagem, setMensagem] = useState(""); // Estado para a mensagem de sucesso ou erro

  useEffect(() => {
    // Carregar filmes e salas do localStorage
    const filmesSalvos = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salasSalvas = JSON.parse(localStorage.getItem("salas") || "[]");
    setFilmes(filmesSalvos);
    setSalas(salasSalvas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!filmeIndex || !salaIndex || !data || !horario) {
      setMensagem("Todos os campos são obrigatórios!");
      return;
    }

    // Criando a sessão
    const sessao = { filmeIndex, salaIndex, data, horario };
    console.log(sessao);

    // Carregar sessões salvas no localStorage
    const sessoesSalvas = JSON.parse(localStorage.getItem("sessoes") || "[]");

    // Adicionar nova sessão
    sessoesSalvas.push(sessao);

    // Salvar as sessões no localStorage
    localStorage.setItem("sessoes", JSON.stringify(sessoesSalvas));

    // Resetar os campos
    setFilmeIndex("");
    setSalaIndex("");
    setData("");
    setHorario("");
    
    // Exibir mensagem de sucesso
    setMensagem("Sessão cadastrada com sucesso!");
  };

  return (
    <main className="container my-5">
      <h1 className="text-center mb-3">Cadastro de Sessões</h1>
      <button className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#modalSessao">
        ➕ Nova Sessão
      </button>

      {/* Modal para adicionar sessão */}
      <div className="modal fade" id="modalSessao" tabIndex="-1" aria-labelledby="modalSessaoLabel" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="modalSessaoLabel">Nova Sessão</h5>
                {/* Botão de Fechar "X" que usa o fechamento padrão do Bootstrap */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="filme" className="form-label">Selecione o Filme</label>
                  <select
                    id="filme"
                    className="form-select"
                    value={filmeIndex}
                    onChange={(e) => setFilmeIndex(e.target.value)}
                    required
                  >
                    <option value="">Selecione</option>
                    {filmes.map((f, index) => (
                      <option key={index} value={index}>{f.titulo}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="sala" className="form-label">Selecione a Sala</label>
                  <select
                    id="sala"
                    className="form-select"
                    value={salaIndex}
                    onChange={(e) => setSalaIndex(e.target.value)}
                    required
                  >
                    <option value="">Selecione</option>
                    {salas.map((s, index) => (
                      <option key={index} value={index}>{s.nome}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="data" className="form-label">Data</label>
                  <input
                    type="date"
                    id="data"
                    className="form-control"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="horario" className="form-label">Horário</label>
                  <input
                    type="time"
                    id="horario"
                    className="form-control"
                    value={horario}
                    onChange={(e) => setHorario(e.target.value)}
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

export default Sessoes;
