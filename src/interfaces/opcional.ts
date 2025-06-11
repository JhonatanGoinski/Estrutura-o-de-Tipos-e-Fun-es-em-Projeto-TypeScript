// Conjunto de dados, com dados opcionais que não precisam ser enviados.

interface CadastroProps {
  nome?: string;
  email: string;
  status: boolean;
}

// função 01 - Primeira maneira de chamar uam interface
function userNovo({ email, status, nome }: CadastroProps): void {
  console.log(`Nome do usuário: ${nome}`);
  console.log(`Email do usuário: ${email}`);
  if (status === true) {
    console.log("Usuário ativo");
  } else {
    console.log("Usuário inativo");
  }
  console.log("==================");
}

// função 02 - Segunda maneira de chamar uma interface
function userNovoDois(user: CadastroProps) {
  console.log("User 2");
  console.log(`Nome: ${user.nome ? user.nome : "Sem nome"}`);
  console.log(`E-mail: ${user.email}`);
  if (user.status === true) {
    console.log("User ativo");
  } else {
    console.log("User inativo");
  }
}

// função 01
userNovo({
  email: "jhonatan@jhonatan.com",
  nome: "Jhonatan Goinski",
  status: true,
});

// função 02
userNovoDois({
  //nome: "Jhonatan",
  email: "jho@jho.com",
  status: false,
});

// Resultado:
// Nome do usuário: Jhonatan Goinski
// Email do usuário: jhonatan@jhonatan.com
// Usuário ativo
// ==================
// User 2
// Nome: Sem nome
// E-mail: jho@jho.com
// User inativo
