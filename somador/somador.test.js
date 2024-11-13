// somador.test.js
const somador = require('./somador');

test('Soma de um array de números positivos', () => {
    expect(somador([1, 2, 3, 4, 5])).toBe(15);
});

test('Soma de um array com números negativos e positivos', () => {
    expect(somador([-1, 5, -3, 7])).toBe(8);
});

test('Soma de um array com números zero', () => {
    expect(somador([0, 0, 0, 0])).toBe(0);
});

test('Soma de um array vazio', () => {
    expect(somador([])).toBe(0);
});

test('Soma de um array com um único número', () => {
    expect(somador([10])).toBe(10);
});
