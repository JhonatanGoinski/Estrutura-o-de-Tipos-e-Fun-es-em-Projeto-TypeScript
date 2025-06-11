"use strict";
function mostrarPromocao(valor) {
    console.log(`Promoção no curso por apenas: R$ ${valor}`);
}
const novoCurso = {
    id: "123",
    nome: "Java",
    valor: 230,
    promocao: mostrarPromocao,
};
console.log(novoCurso.promocao(350));
console.log("=======exemplo=2======");
let somaNumeros = (valor1, valor2) => {
    return valor1 + valor2;
};
const result = somaNumeros(10, 15);
console.log(`Resultado da soma: ${result}`);
