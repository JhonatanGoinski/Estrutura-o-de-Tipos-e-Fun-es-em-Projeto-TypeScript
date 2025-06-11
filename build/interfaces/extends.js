"use strict";
const fifa = {
    id: "1",
    nome: "Fifa 12",
    descricao: "Jogo de futebol",
    plataforma: ["PS4", "PS5", "PC"],
};
const fifaDlc = {
    id: "2",
    nome: "Fifa 12 - Jogadores Atualizados",
    descricao: "10 times sofreram alterações em seus jogadores.",
    plataforma: ["PS4", "PS5", "PC"],
    novoConteudo: ["Mudanças de Times", "Elenco atualizado", "Camisas Novas"],
    jogoOrignal: fifa,
};
console.log("DLC: ", fifaDlc);
