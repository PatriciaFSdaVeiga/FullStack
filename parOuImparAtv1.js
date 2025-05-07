const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntarNumero() {
  rl.question('Digite um número inteiro: ', (resposta) => {
    const numero = parseInt(resposta);

    //verifica se o número é válido (inteiro)
    if (isNaN(numero) || numero % 1 !== 0) {
      console.log('Erro: Não é um número inteiro válido! Tente novamente.');
      perguntarNumero(); // Chama novamente se o valor for inválido
    } else {
      //verifica se o número é par ou ímpar
      if (numero % 2 === 0) {
        console.log('Número válido: ' + numero + ' - É PAR');
      } else {
        console.log('Número válido: ' + numero + ' - É ÍMPAR');
      }
      rl.close();
    }
  });
}

perguntarNumero();
