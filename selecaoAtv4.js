const readline = require('readline');

//interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//exibir o menu e processar a escolha do usuário
function exibirMenu() {
    console.log("Escolha uma opção:");
    console.log("1 - Aprender sobre JavaScript");
    console.log("2 - Aprender sobre Node.js");
    console.log("3 - Aprender sobre React");

    rl.question("Digite o número da opção (1, 2 ou 3): ", (opcao) => {
        switch (opcao) {
            case '1':
                console.log("\nVocê escolheu 'Aprender sobre JavaScript'.\n");
                console.log("JavaScript é uma linguagem de programação usada para desenvolvimento web, tanto no lado do cliente quanto no lado do servidor.");
                break;
            case '2':
                console.log("\nVocê escolheu 'Aprender sobre Node.js'.\n");
                console.log("Node.js é um ambiente de execução JavaScript no lado do servidor. Ele usa o motor V8 do Chrome para executar código JavaScript.");
                break;
            case '3':
                console.log("\nVocê escolheu 'Aprender sobre React'.\n");
                console.log("React é uma biblioteca JavaScript para construir interfaces de usuário, muito usada em aplicações de página única (SPA).");
                break;
            default:
                console.log("\nOpção inválida. Por favor, escolha uma opção entre 1, 2 ou 3.");
                break;
        }
        rl.close(); //encerra a interface readline após a escolha
    });
}

//função para exibir o menu
exibirMenu();
