// src/categorizer.js

function normalizeTitle(title) {
    // Normaliza o título, removendo palavras irrelevantes e deixando tudo em minúsculo
    return title
      .toLowerCase()
      .replace(/leite|integral|desnatado|semi-desnatado|kg|litro|1l|2l/g, '')
      .trim()
      .replace(/\s+/g, ' '); // Remove espaços extras
  }
  
  function categorizer(products) {
    const categories = [];
  
    products.forEach(product => {
      // Normaliza o título do produto
      const normalizedTitle = normalizeTitle(product.title);
  
      // Encontra a categoria correspondente com base no título normalizado
      let category = categories.find(category => normalizeTitle(category.category) === normalizedTitle);
  
      // Se não encontrar, cria uma nova categoria
      if (!category) {
        category = {
          category: product.title,
          count: 0,
          products: []
        };
        categories.push(category);
      }
  
      // Atualiza a contagem e adiciona o produto à categoria
      category.count += 1;
      category.products.push({
        title: product.title,
        supermarket: product.supermarket
      });
    });
  
    return categories;
  }
  
  module.exports = categorizer;
  