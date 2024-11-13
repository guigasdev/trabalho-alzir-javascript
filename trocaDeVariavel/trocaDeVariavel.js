function trocaDeVariavel(a, b) {
    let aux = 0;
    aux = a;
    a = b;
    b = aux;
    return { a, b, aux };
}

module.exports = trocaDeVariavel;
