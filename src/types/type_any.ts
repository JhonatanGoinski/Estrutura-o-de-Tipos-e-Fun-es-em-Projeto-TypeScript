// Type Any | Não é legal usar! Aceita qualquer coisa. Perde totalmente o sentido de utilizar o TypeScript.

let precoProduto: any;

precoProduto = true;
precoProduto = 123;
precoProduto = "Qualquer coisa";

let nota1: any;
let nota2: any;

nota1 = 10;
nota2 = "15";

let resultado = nota1 + nota2;

console.log(precoProduto);
console.log(resultado);

// Qualquer coisa
// 1015
