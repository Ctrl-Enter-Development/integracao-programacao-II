// backend/app.js

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/produto', (req, res) => {
  // Lógica do backend para fornecer dados
  const products = [
    { id: 1, name: 'Produto 1', price: 19.99 },
    { id: 2, name: 'Produto 2', price: 29.99 },
    { id: 3, name: 'Produto 3', price: 39.99 },
    // Adicione mais produtos conforme necessário
  ];

  res.json(products);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
