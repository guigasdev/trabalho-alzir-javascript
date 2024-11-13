// fibonacci.js
function fibonacci(n) {
    let a = 0, b = 1, i = 2;
    let sequencia = [a, b];

    if (n === 1) return [a];
    if (n === 2) return [a, b];

    while (i < n) {
        a = a + b;
        b = a + b;
        sequencia.push(a, b);
        i += 2;
    }
    if (i > n) {
        sequencia.pop();
    }

    return sequencia;
}

module.exports = fibonacci;
