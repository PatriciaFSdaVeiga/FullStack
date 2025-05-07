
let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(a);
    const proximo = a + b;
    a = b;
    b = proximo;
}
