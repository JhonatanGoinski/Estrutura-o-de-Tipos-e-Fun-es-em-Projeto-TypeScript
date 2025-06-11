// Pode apenas ler dados e não alterar
// Utilizando o readonly, após uma declaração do valor não podera ser alterado.
interface ProdutoProps {
  readonly id: string;
  nome: string;
  descricao: string;
}

let produto: ProdutoProps = {
  id: "1",
  nome: "Tenis Adidas",
  descricao: "Super top de linha",
};
// linha abaixo não será executada por conta do readonly, não pode mudar valor.
//  produto.id = "123"

console.log(produto);
