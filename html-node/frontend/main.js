// frontend/main.js ou script.js

import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/data'); // Substitua pela URL do seu backend
    console.log(response.data.message); // Exibe a mensagem do backend
  } catch (error) {
    console.error('Erro ao obter dados do backend:', error);
  }
};

fetchData();
