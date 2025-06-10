let numeros: number[];
// let numeros: Array<number>; outra forma de declarar.

// let filmes: string[];
// let filmes: Array<string>;

// Cuidar sempre com a quatidade de tipage.
let filmes: Array<string | number>;
// let filmes: (string | number)[]; - outra forma de declarar.

filmes = ["filme2", "filme3", "filme4"];

filmes.push("filme1");
filmes.push(25);

console.log("Nome dos filmes: ", filmes);

console.log("=====================");

numeros = [1, 2, 3, 5, 6, 7, 8];

numeros.push(55);

console.log("Meus numeros: ", numeros);
