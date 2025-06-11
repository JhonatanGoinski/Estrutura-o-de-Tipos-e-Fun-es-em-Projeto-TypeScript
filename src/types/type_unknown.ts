// Tipo desconhecido > Quando não sabe o TIPO que vai receber.

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// valor do tipo unknown só pode ser atribuidos ao tipo unknown ou any.
let totalEntregar: unknown = totalPedido;

console.log(totalEntregar);
