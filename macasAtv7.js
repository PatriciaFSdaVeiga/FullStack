const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quantas maçãs você quer comprar? ", (quantidadeStr) => {
    const quantidade = parseInt(quantidadeStr);

    let precoPorUnidade;
    if (quantidade < 12) {
        precoPorUnidade = 0.30;
    } else {
        precoPorUnidade = 0.25;
    }

    //valor total
    const valorTotal = quantidade * precoPorUnidade;

    //resultado
    console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}`);

    rl.close();
});
