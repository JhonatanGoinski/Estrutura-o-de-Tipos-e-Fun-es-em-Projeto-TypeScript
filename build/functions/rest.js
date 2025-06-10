"use strict";
console.log("_________funcao_calculo_vendas_______");
function totalVenda(...vendas) {
    const quantidadeVendas = vendas.length;
    const soma = vendas.reduce((total, valor) => total + valor, 0);
    console.log(`Você fez ${quantidadeVendas} vendas hoje!`);
    console.log(`Valor total de: R$ ${soma.toFixed(2)}`);
}
totalVenda(10, 20, 10, 10);
console.log("_________funcao_nomes_______");
function mostraNomes(...nomes) {
    console.log("Total de nomes: ", nomes.length);
    nomes.map((nome) => {
        console.log(nome);
    });
}
mostraNomes("jhonatan", "miguel", "goinski");
