const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//verificar se os lados formam um triângulo e classificar
function verificarTriangulo(a, b, c) {
    // Verifica se é possível formar um triângulo
    if (a + b > c && a + c > b && b + c > a) {
        // Se for um triângulo, verifica o tipo
        if (a === b && b === c) {
            return "Triângulo Equilátero";
        } else if (a === b || b === c || a === c) {
            return "Triângulo Isósceles";
        } else {
            return "Triângulo Escaleno";
        }
    } else {
        return "Não é um triângulo";
    }
}


rl.question("Digite o valor do lado A: ", (ladoA) => {
    rl.question("Digite o valor do lado B: ", (ladoB) => {
        rl.question("Digite o valor do lado C: ", (ladoC) => {
            const a = parseFloat(ladoA);
            const b = parseFloat(ladoB);
            const c = parseFloat(ladoC);

            const resultado = verificarTriangulo(a, b, c);
            console.log(resultado);
            
            rl.close();
        });
    });
});
