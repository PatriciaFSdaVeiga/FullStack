const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function pedirNumero() {
    rl.question(`Digite o número ${contador + 1}: `, (input) => {
        const numero = parseFloat(input);

        if (isNaN(numero)) {
            console.log("Por favor, digite um número válido.");
        } else {
            soma += numero;
            contador++;
        }

        if (contador < 5) {
            pedirNumero(); 
        } else {
            console.log(`\nA soma total dos 5 números é: ${soma}`);
            rl.close(); 
        }
    });
}


pedirNumero();
