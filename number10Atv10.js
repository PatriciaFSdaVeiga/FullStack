const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro: ", (numeroStr) => {
    const numero = parseInt(numeroStr);

    console.log("\nRepetindo o número 10 vezes:");
    for (let i = 1; i <= 10; i++) {
        console.log(`${i}. ${numero}`);
    }

    rl.close();
});
