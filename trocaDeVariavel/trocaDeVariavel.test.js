const trocaDeVariavel = require('./trocaDeVariavel');

test('Troca de valores entre a e b', () => {
    let a = 10, b = 20;
    let result = trocaDeVariavel(a, b);
    expect(result).toEqual({ a: 20, b: 10, aux: 10 });
});

test('Troca de valores com números negativos', () => {
    let a = -5, b = 15;
    let result = trocaDeVariavel(a, b);
    expect(result).toEqual({ a: 15, b: -5, aux: -5 });
});

test('Troca de valores entre zero e um número positivo', () => {
    let a = 0, b = 100;
    let result = trocaDeVariavel(a, b);
    expect(result).toEqual({ a: 100, b: 0, aux: 0 });
});

test('Troca de valores entre zero e um número negativo', () => {
    let a = 0, b = -10;
    let result = trocaDeVariavel(a, b);
    expect(result).toEqual({ a: -10, b: 0, aux: 0 });
});
