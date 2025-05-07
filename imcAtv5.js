const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//calcular o IMC e determinar a categoria
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);  // Fórmula do IMC
    let categoria = '';

    //categoria com base no valor do IMC
    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

 
    return { imc, categoria };
}

rl.question("Digite o seu peso (kg): ", (pesoStr) => {
    rl.question("Digite a sua altura (em metros, ex: 1.75): ", (alturaStr) => {
        const peso = parseFloat(pesoStr);
        const altura = parseFloat(alturaStr);

        const resultado = calcularIMC(peso, altura);
        console.log(`Seu IMC é: ${resultado.imc.toFixed(2)}`);
        console.log(`Categoria: ${resultado.categoria}`);
        
        rl.close(); 
    });
});
