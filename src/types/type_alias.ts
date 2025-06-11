// Utilizando o type alias para não ficar reescrevendo a tipagem dentro das funções caso utilize varias vezes.

type Uuid = number | string | null;

function acessar(uid: Uuid, nome: string) {
  console.log(`ID: ${uid} - Bem vindo: ${nome}`);
}

function logUser(uid: Uuid) {
  console.log(`Conta acessada pelo ID: ${uid}`);
}

acessar(123, "Jhonatan Miguel");
acessar("34", "Jorge Silva");

logUser("56");

// Exemplo 2

type Moedas = "BRL" | "EUR" | "USD";

function comprarItem(moeda: Moedas) {
  if (moeda === "BRL") {
    console.log("Comprando em Reais");
  }
  if (moeda === "EUR") {
    console.log("Comprando em Euro");
  }
  if (moeda === "USD") {
    console.log("Comprando em Dolar");
  }
}

comprarItem("USD");
