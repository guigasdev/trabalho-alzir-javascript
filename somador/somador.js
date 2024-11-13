function somador(numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

module.exports = somador;
