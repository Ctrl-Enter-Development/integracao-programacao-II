import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientesList = ({ authToken }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get(
          'https://x8ki-letl-twmt.n7.xano.io/api:bnOR3s23/clientes',
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao obter clientes:', error.message);
      }
    };

    fetchClientes();
  }, [authToken]);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            Nome: {cliente.nome}, Sexo: {cliente.sexo}, Telefone: {cliente.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientesList;
