// tupla não possui no JS e sim apenas no TS

let aluno: [string, number]; // precisa seguir a mesma ordem declarada.

aluno = ["aluno1", 123];

aluno.push("aluno2", 456);

console.log(aluno);
console.log("==============");

let statusPedidos: [string, string, string];

statusPedidos = ["Em produção", "Saiu para entrega", "Pedido entregue"];

console.log(statusPedidos);
