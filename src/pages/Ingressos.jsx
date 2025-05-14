import React, { useState, useEffect } from "react";

function Ingressos() {
  const [quantidade, setQuantidade] = useState(1);
  const [sessaoIndex, setSessaoIndex] = useState("");
  const [sessoes, setSessoes] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    // Carregar sessões, filmes e salas do localStorage
    const sessoesSalvas = JSON.parse(localStorage.getItem("sessoes") || "[]");
    const filmesSalvos = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salasSalvas = JSON.parse(localStorage.getItem("salas") || "[]");

    setSessoes(sessoesSalvas);
    setFilmes(filmesSalvos);
    setSalas(salasSalvas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingresso = { sessaoIndex, quantidade };
    console.log(ingresso);
    alert(`Venda de ${quantidade} ingresso(s) realizada com sucesso.`);
    setQuantidade(1);
  };

  // Obter as informações da sessão (filme, sala, data, horário) com base no índice da sessão
  const sessaoSelecionada = sessoes[sessaoIndex];
  const filme = filmes[sessaoSelecionada ? sessaoSelecionada.filmeIndex : null];
  const sala = salas[sessaoSelecionada ? sessaoSelecionada.salaIndex : null];

  return (
    <main className="container my-5">
      <h1 className="text-center mb-3">Venda de Ingressos</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sessao" className="form-label">Selecione Sessão</label>
          <select
            id="sessao"
            className="form-select"
            value={sessaoIndex}
            onChange={(e) => setSessaoIndex(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {sessoes.map((s, index) => (
              <option key={index} value={index}>
                {filmes[s.filmeIndex]?.titulo} - {salas[s.salaIndex]?.nome} - {s.data} {s.horario}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="quantidade" className="form-label">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            className="form-control"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Confirmar</button>
      </form>

      {/* Exibição da sessão selecionada */}
      {sessaoSelecionada && filme && sala && (
        <div className="mt-4">
          <h4>Detalhes da Sessão:</h4>
          <p><strong>Filme:</strong> {filme.titulo}</p>
          <p><strong>Sala:</strong> {sala.nome}</p>
          <p><strong>Data:</strong> {sessaoSelecionada.data}</p>
          <p><strong>Horário:</strong> {sessaoSelecionada.horario}</p>
        </div>
      )}
    </main>
  );
}

export default Ingressos;
