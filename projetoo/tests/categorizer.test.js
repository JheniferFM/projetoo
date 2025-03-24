const categorizer = require('../src/categorizer');

test('should categorize similar products correctly', () => {
    const products = [
        { title: "Leite Integral Piracanjuba 1L", supermarket: "Supermercado A" },
        { title: "Leite Piracanjuba Integral 1L", supermarket: "Supermercado B" },
        { title: "Leite Desnatado Piracanjuba 1L", supermarket: "Supermercado C" }
    ];

    const result = categorizer(products);

    expect(result).toHaveLength(2);
    expect(result[0].count).toBe(2);
    expect(result[1].count).toBe(1);
});
