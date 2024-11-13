function ordenacao(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length; j++) {
            if (vetor[i] < vetor[j]) {
                let aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
    return vetor;
}

module.exports = ordenacao;
