import React, { useEffect, useState } from "react";

function ListarSessoes() {
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    const sessoesSalvas = JSON.parse(localStorage.getItem("sessoes") || "[]");
    setSessoes(sessoesSalvas);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Lista de Sessões</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Filme</th>
            <th>Sala</th>
            <th>Data</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {sessoes.map((sessao, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{sessao.filme}</td>
              <td>{sessao.sala}</td>
              <td>{sessao.data}</td>
              <td>{sessao.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListarSessoes;
