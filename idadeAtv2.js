const readline = require('readline');

//interface de leitura de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarIdade(idade) {
    if (idade <= 12) {
        return "Criança";
    } else if (idade <= 17) {
        return "Adolescente";
    } else if (idade <= 59) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

//solicita a idade ao usuário
rl.question("Digite a idade da pessoa: ", (idade) => {
    idade = parseInt(idade); 

    if (isNaN(idade)) {
        console.log("Por favor, insira um número válido para a idade.");
    } else {
        let categoria = classificarIdade(idade);
        console.log("A pessoa é classificada como: " + categoria);
    }

    rl.close();
});
