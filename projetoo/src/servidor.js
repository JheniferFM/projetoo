const express = require('express');
const fs = require('fs');
const categorizer = require('./categorizer');

const app = express();
const PORT = 3000;

app.get('/categorize', (req, res) => {
  const rawData = fs.readFileSync('./data/data.json');
  const products = JSON.parse(rawData);

  const result = categorizer(products);
  fs.writeFileSync('./data/output.json', JSON.stringify(result, null, 2)); // Salva saída em um arquivo

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});
