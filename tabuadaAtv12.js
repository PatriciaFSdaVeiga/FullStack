const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para ver a tabuada: ", (input) => {
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    } else {
        console.log(`\nTabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    rl.close();
});
