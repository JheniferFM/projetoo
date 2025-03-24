const fs = require('fs');
const path = require('path');
const categorizer = require('./src/categorizer');
const logger = require('./src/logger');

// Caminho para o arquivo de dados
const dataPath = path.join(__dirname, 'data', 'data.json');

// Verifica se o arquivo existe antes de tentar lê-lo
if (!fs.existsSync(dataPath)) {
    logger.error('Arquivo data.json não encontrado. Certifique-se de que ele existe na pasta data.');
    process.exit(1);
}

// Lendo os dados do arquivo JSON
const rawData = fs.readFileSync(dataPath, 'utf-8');
const products = JSON.parse(rawData);

// Executa a categorização dos produtos
const categorizedProducts = categorizer(products);

// Exibe o resultado no console
console.log(JSON.stringify(categorizedProducts, null, 2));

// Salva a saída em um arquivo JSON
const outputPath = path.join(__dirname, 'data', 'output.json');
fs.writeFileSync(outputPath, JSON.stringify(categorizedProducts, null, 2));
logger.info('Categorização concluída. Resultado salvo em data/output.json');
