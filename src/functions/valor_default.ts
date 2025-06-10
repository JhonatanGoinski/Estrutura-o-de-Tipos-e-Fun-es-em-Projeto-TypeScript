// Como deixar uma valor por default ou deixar ele opcional.
console.log("==========funcao=cadastro========");

function cadastro(
  email: string,
  senha: string,
  nome = "Sem nome",
  idade?: number
): void {
  let data = { email, senha, nome, idade };

  console.log(data);
}

// cadastro("teste@teste.com", "123123");
// Enviando todos os dados
cadastro("teste@teste.com", "123123", "Jhonata", 21);

console.log("==========funcao=loja========");

function cadastroLoja(
  nome: string,
  email: string,
  status = false
): boolean | string {
  console.log(nome);

  if (status === false) {
    console.log("Loja fechada");
  } else {
    console.log("Loja aberta");
  }

  return status;
}

cadastroLoja("Loja Jhow", "jg@teste.com", true);
