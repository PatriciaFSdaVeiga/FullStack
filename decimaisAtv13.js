const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function pedirNumero() {
    rl.question("Digite um número decimal (0 para encerrar): ", (input) => {
        const numero = parseFloat(input);

        if (isNaN(numero)) {
            console.log("Entrada inválida. Digite um número.");
            pedirNumero(); 
        } else if (numero === 0) {
            if (contador === 0) {
                console.log("Nenhum número foi digitado.");
            } else {
                const media = soma / contador;
                console.log(`\nA média aritmética dos ${contador} números é: ${media.toFixed(2)}`);
            }
            rl.close();
        } else {
            soma += numero;
            contador++;
            pedirNumero(); 
        }
    });
}

pedirNumero();
