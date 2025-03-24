const removeAccents = require('remove-accents');

/**
 * Normaliza o título do produto (remove acentos, espaços extras e converte para minúsculas).
 * @param {string} title Título do produto
 * @returns {string} Título normalizado
 */
function normalizeTitle(title) {
    return removeAccents(title.toLowerCase().trim().replace(/\s+/g, ' '));
}

/**
 * Verifica se dois títulos são similares o suficiente para serem considerados o mesmo produto.
 * @param {string} title1 Título do primeiro produto
 * @param {string} title2 Título do segundo produto
 * @returns {boolean} Se os produtos são equivalentes
 */
function areSimilar(title1, title2) {
    return title1.includes(title2) || title2.includes(title1);
}

module.exports = { normalizeTitle, areSimilar };
