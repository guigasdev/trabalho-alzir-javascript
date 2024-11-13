// mdc.test.js
const mdc = require('./mdc');

test('MDC de 10 e 5 deve ser 5', () => {
    expect(mdc(10, 5)).toBe(5);
});

test('MDC de 20 e 8 deve ser 4', () => {
    expect(mdc(20, 8)).toBe(4);
});

test('MDC de 13 e 7 deve ser 1 (números primos entre si)', () => {
    expect(mdc(13, 7)).toBe(1);
});

test('MDC de 0 e qualquer número deve ser o próprio número', () => {
    expect(mdc(0, 10)).toBe(10);
    expect(mdc(10, 0)).toBe(10);
});

test('MDC de números negativos (-15 e -5) deve ser o MDC positivo 5', () => {
    expect(mdc(-15, -5)).toBe(5);
});
