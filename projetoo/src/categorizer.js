const normalizer = require('./normalizer');
const logger = require('./logger');

/**
 * Categoriza os produtos, agrupando equivalentes e diferenciando similares.
 * @param {Array} products Lista de produtos
 * @returns {Array} Produtos categorizados
 */
function categorizer(products) {
    logger.info('Iniciando categorização dos produtos...');
    
    let categories = [];

    products.forEach(product => {
        const normalizedTitle = normalizer.normalizeTitle(product.title);
        
        let foundCategory = categories.find(category => 
            normalizer.areSimilar(normalizedTitle, category.normalizedTitle)
        );

        if (foundCategory) {
            foundCategory.products.push(product);
            foundCategory.count++;
        } else {
            categories.push({
                category: product.title, 
                normalizedTitle,
                count: 1,
                products: [product]
            });
        }
    });

    logger.info('Categorização concluída com sucesso.');
    return categories;
}

module.exports = categorizer;
