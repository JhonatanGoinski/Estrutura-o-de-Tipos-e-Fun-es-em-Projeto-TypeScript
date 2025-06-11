// Realizando intercessão entre dois tipos

type Info = {
  id: number;
  nome: string;
  descricao?: string;
};

const produtoInfo: Info = {
  id: 123,
  nome: "Placa de video",
  descricao: "GTX",
};

type Categoria = {
  slug: string;
  quantidadeProduto: number;
};

const categoria1: Categoria = {
  slug: "Hardware",
  quantidadeProduto: 3,
};

type ProdutoInfo = Info & Categoria; // ProdutoInfor é a intercessao (uniao) entre info e categoria

const novoProduto: ProdutoInfo = {
  id: 1234,
  nome: "Teclado",
  descricao: "Teclado sem fio",
  slug: "Teclado mecanico",
  quantidadeProduto: 10,
};

console.log(novoProduto);
