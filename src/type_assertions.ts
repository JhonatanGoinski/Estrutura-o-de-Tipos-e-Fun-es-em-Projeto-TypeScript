// Afirmar algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

// afirmando que o statusAtual é de fato um numero
mudaStatus = statusAtual as number;

// Outra maneira de afirmar o tipo
mudaStatus = <number>statusAtual;

console.log(mudaStatus);
console.log("==============");

let query: unknown = "pizza";

let searchTerm: string = query as string;

console.log("Search TERM", searchTerm);
