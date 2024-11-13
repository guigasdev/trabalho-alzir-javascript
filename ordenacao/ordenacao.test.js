const ordenacao = require('./ordenacao');

test('Ordena um vetor de números em ordem crescente', () => {
    expect(ordenacao([5, 3, 8, 1, 9])).toEqual([1, 3, 5, 8, 9]);
});

test('Ordena um vetor já em ordem', () => {
    expect(ordenacao([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('Ordena um vetor com números negativos', () => {
    expect(ordenacao([-3, 5, -1, 0])).toEqual([-3, -1, 0, 5]);
});

test('Ordena um vetor com números iguais', () => {
    expect(ordenacao([2, 2, 2, 2])).toEqual([2, 2, 2, 2]);
});

test('Ordena um vetor vazio', () => {
    expect(ordenacao([])).toEqual([]);
});
