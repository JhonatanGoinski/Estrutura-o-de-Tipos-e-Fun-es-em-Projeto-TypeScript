// Conjunto de dados (um padrão) para descrever a estrutura de um objeto.

interface LojaProps {
  nome: string;
  endereco: string;
  status: boolean;
}

const Burguer: LojaProps = {
  nome: "Burguer",
  endereco: "Rua xxx, 12",
  status: true,
};

function novaLoja({ nome, endereco, status }: LojaProps): void {
  console.log(`Loja ${nome} criada com sucesso!`);
  console.log(`Endereço: ${endereco}`);
  if (status === true) {
    console.log("Loja aberta");
  } else {
    console.log("Loja fechada");
  }
  console.log("__________________________");
}
novaLoja({ nome: "x-tudao", endereco: "Rua, ccc, 56", status: false });
novaLoja({ nome: "dogs-red", endereco: "Rua, xxx, 23", status: true });
