const contagemAprovados = require('./contagem');

test('Contagem de aprovados com notas acima de 50', () => {
    const n = 3;
    const notas = [60, 70, 80];
    expect(contagemAprovados(n, notas)).toBe(3);
});

test('Nenhum aprovado com notas abaixo de 50', () => {
    const n = 3;
    const notas = [40, 30, 20];
    expect(contagemAprovados(n, notas)).toBe(0);
});

test('Apenas um aprovado', () => {
    const n = 3;
    const notas = [50, 20, 30];
    expect(contagemAprovados(n, notas)).toBe(1);
});
