// fibonacci.test.js
const fibonacci = require('./fibonacci');

test('Geração de sequência Fibonacci para 1 termo', () => {
    const n = 1;
    expect(fibonacci(n)).toEqual([0]);
});

test('Geração de sequência Fibonacci para 2 termos', () => {
    const n = 2;
    expect(fibonacci(n)).toEqual([0, 1]);
});

test('Geração de sequência Fibonacci para 5 termos', () => {
    const n = 5;
    expect(fibonacci(n)).toEqual([0, 1, 1, 2, 3]);
});

test('Geração de sequência Fibonacci para 7 termos', () => {
    const n = 7;
    expect(fibonacci(n)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});
