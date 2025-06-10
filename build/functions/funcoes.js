"use strict";
console.log("________USER__________");
function Login(userName) {
    let message = "Bem vindo " + userName;
    console.log(message);
    return userName;
}
Login("Jhonatan");
console.log("________SOMA__________");
let n1 = 10;
let n2 = 20;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    return soma;
}
function somaString(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 20) {
        return "Soma maior que 20";
    }
    else {
        return "Soma menor que 20";
    }
}
console.log(soma(n1, n2));
console.log(somaString(n1, n2));
