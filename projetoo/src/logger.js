const fs = require('fs');
const path = require('path');

// Caminho para o arquivo de logs
const logPath = path.join(__dirname, '..', 'logs', 'app.log');

// Função para registrar mensagens no console e no arquivo de log
function logToFile(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;

    fs.appendFileSync(logPath, logMessage);
    console.log(logMessage);
}

module.exports = {
    info: (message) => logToFile('info', message),
    error: (message) => logToFile('error', message),
};
