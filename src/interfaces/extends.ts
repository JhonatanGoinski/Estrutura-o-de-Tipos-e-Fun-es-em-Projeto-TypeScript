// Supor que temos um jogo e esse jogo pode ter uma dlc.
// Utilizando o extends para reaproveitar dados e não ter que
// repitir estruturas.

interface JogoProps {
  readonly id: string;
  nome: string;
  descricao: string;
  plataforma: string[];
}

const fifa: JogoProps = {
  id: "1",
  nome: "Fifa 12",
  descricao: "Jogo de futebol",
  plataforma: ["PS4", "PS5", "PC"],
};

/////////////// Utilizando extends para obter suas propriedades /////////////////////////////
interface DLC extends JogoProps {
  jogoOrignal: JogoProps;
  novoConteudo: string[];
}

const fifaDlc: DLC = {
  id: "2",
  nome: "Fifa 12 - Jogadores Atualizados",
  descricao: "10 times sofreram alterações em seus jogadores.",
  plataforma: ["PS4", "PS5", "PC"],
  novoConteudo: ["Mudanças de Times", "Elenco atualizado", "Camisas Novas"],
  jogoOrignal: fifa,
};

console.log("DLC: ", fifaDlc);
//////////////////////////////////////////////
