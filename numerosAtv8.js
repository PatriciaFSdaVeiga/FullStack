const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro valor: ", (valor1Str) => {
    rl.question("Digite o segundo valor: ", (valor2Str) => {
        const valor1 = parseFloat(valor1Str);
        const valor2 = parseFloat(valor2Str);

        if (valor1 === valor2) {
            console.log("Os valores não podem ser iguais.");
        } else if (valor1 < valor2) {
            console.log(`Ordem crescente: ${valor1}, ${valor2}`);
        } else {
            console.log(`Ordem crescente: ${valor2}, ${valor1}`);
        }

        rl.close(); 
    });
});
