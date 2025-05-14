import React, { useEffect, useState } from "react";

function ListarSessoes() {
  const [sessoes, setSessoes] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    // Carregar as sessões, filmes e salas do localStorage
    const sessoesSalvas = JSON.parse(localStorage.getItem("sessoes") || "[]");
    const filmesSalvos = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salasSalvas = JSON.parse(localStorage.getItem("salas") || "[]");

    setSessoes(sessoesSalvas);
    setFilmes(filmesSalvos);
    setSalas(salasSalvas);
  }, []);

  return (
    <main className="container my-5">
      <h1 className="text-center mb-3">Sessões Agendadas</h1>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Filme</th>
              <th>Sala</th>
              <th>Data</th>
              <th>Horário</th>
            </tr>
          </thead>
          <tbody>
            {sessoes.map((sessao, index) => {
              const filme = filmes[sessao.filmeIndex]; // Obter o nome do filme
              const sala = salas[sessao.salaIndex]; // Obter o nome da sala
              return (
                <tr key={index}>
                  <td>{filme ? filme.titulo : "Filme não encontrado"}</td>
                  <td>{sala ? sala.nome : "Sala não encontrada"}</td>
                  <td>{sessao.data}</td>
                  <td>{sessao.horario}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default ListarSessoes;
