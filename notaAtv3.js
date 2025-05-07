const readline = require('readline');

//interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//classificar a nota
function classificarNota(nota) {
    if (nota >= 7 && nota <= 10) {
        return "Aprovado";
    } else if (nota >= 4 && nota < 7) {
        return "Recuperação";
    } else if (nota >= 0 && nota < 4) {
        return "Reprovado";
    } else {
        return "Nota inválida";  // Caso a nota esteja fora do intervalo 0 a 10
    }
}

//solicita a nota ao usuário
rl.question("Digite a sua nota (0 a 10): ", (entrada) => {
    let nota = parseFloat(entrada);
    let resultado = classificarNota(nota);
    console.log("Resultado: " + resultado);
    rl.close(); //encerra a interface readline
});
