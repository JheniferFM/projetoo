// tests/categorizer.test.js

const categorizer = require('../src/categorizer');  // Ajuste o caminho conforme necessário

describe('categorizer', () => {
  it('should categorize the products correctly', () => {
    const inputData = [
      {
        "id": 1,
        "title": "Leite Integral Piracanjuba 1L",
        "supermarket": "Supermercado A",
      },
      {
        "id": 2,
        "title": "Leite Piracanjuba Integral 1L",
        "supermarket": "Supermercado B",
      },
      {
        "id": 3,
        "title": "Leite Integral Italac 1L",
        "supermarket": "Supermercado A",
      }
    ];

    const expectedOutput = [
      {
        "category": "Leite Integral Piracanjuba 1L",
        "count": 2,
        "products": [
          {
            "title": "Leite Integral Piracanjuba 1L",
            "supermarket": "Supermercado A"
          },
          {
            "title": "Leite Piracanjuba Integral 1L",
            "supermarket": "Supermercado B"
          }
        ]
      }
    ];

    // Chama a função de categorização (que ainda vamos escrever)
    const result = categorizer(inputData);

    // Verifica se a saída está correta
    expect(result).toEqual(expectedOutput);
  });
});
