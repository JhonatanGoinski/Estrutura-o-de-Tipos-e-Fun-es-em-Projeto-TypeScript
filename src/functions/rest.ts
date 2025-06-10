// função que recebe varios parametros

// function totalVenda(
//   venda1: number,
//   venda2: number,
//   venda3: number,
//   venda4: number
// ) {
//   const total = venda1 + venda2 + venda3 + venda4;

//   console.log(total);

//   return total;
// }

// totalVenda(10, 20, 30, 20);

// Recriando função anterior com REST

console.log("_________funcao_calculo_vendas_______");
function totalVenda(...vendas: number[]) {
  const quantidadeVendas = vendas.length;

  const soma = vendas.reduce((total, valor) => total + valor, 0);
  console.log(`Você fez ${quantidadeVendas} vendas hoje!`);

  console.log(`Valor total de: R$ ${soma.toFixed(2)}`);
}

totalVenda(10, 20, 10, 10);

console.log("_________funcao_nomes_______");

function mostraNomes(...nomes: string[]) {
  console.log("Total de nomes: ", nomes.length);
  nomes.map((nome) => {
    console.log(nome);
  });
}
mostraNomes("jhonatan", "miguel", "goinski");
