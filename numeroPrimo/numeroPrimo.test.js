const numeroPrimo = require('./numeroPrimo');

test('O número 2 deve ser primo', () => {
    expect(numeroPrimo(2)).toBe(true);
});

test('O número 3 deve ser primo', () => {
    expect(numeroPrimo(3)).toBe(true);
});

test('O número 4 não deve ser primo', () => {
    expect(numeroPrimo(4)).toBe(false);
});

test('O número 17 deve ser primo', () => {
    expect(numeroPrimo(17)).toBe(true);
});

test('O número 1 não deve ser primo', () => {
    expect(numeroPrimo(1)).toBe(false);
});

test('O número 0 não deve ser primo', () => {
    expect(numeroPrimo(0)).toBe(false);
});

test('O número negativo (-7) não deve ser primo', () => {
    expect(numeroPrimo(-7)).toBe(false);
});
