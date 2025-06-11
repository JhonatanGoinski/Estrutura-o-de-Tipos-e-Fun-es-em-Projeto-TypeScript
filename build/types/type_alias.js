"use strict";
function acessar(uid, nome) {
    console.log(`ID: ${uid} - Bem vindo: ${nome}`);
}
function logUser(uid) {
    console.log(`Conta acessada pelo ID: ${uid}`);
}
acessar(123, "Jhonatan Miguel");
acessar("34", "Jorge Silva");
logUser("56");
function comprarItem(moeda) {
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
