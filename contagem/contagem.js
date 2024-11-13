function contagemAprovados(n, notas) {
    let cont = 0;
    for (let i = 0; i < n; i++) {
        if (notas[i] >= 50) {
            cont += 1;
        }
    }
    console.log(`São ${n} alunos`);
    console.log(`São ${cont} alunos aprovados`);
    return cont;
}

module.exports = contagemAprovados;
