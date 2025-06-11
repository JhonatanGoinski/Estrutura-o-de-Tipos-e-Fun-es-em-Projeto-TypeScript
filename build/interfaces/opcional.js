"use strict";
function userNovo({ email, status, nome }) {
    console.log(`Nome do usuário: ${nome}`);
    console.log(`Email do usuário: ${email}`);
    if (status === true) {
        console.log("Usuário ativo");
    }
    else {
        console.log("Usuário inativo");
    }
    console.log("==================");
}
function userNovoDois(user) {
    console.log("User 2");
    console.log(`Nome: ${user.nome ? user.nome : "Sem nome"}`);
    console.log(`E-mail: ${user.email}`);
    if (user.status === true) {
        console.log("User ativo");
    }
    else {
        console.log("User inativo");
    }
}
userNovo({
    email: "jhonatan@jhonatan.com",
    nome: "Jhonatan Goinski",
    status: true,
});
userNovoDois({
    email: "jho@jho.com",
    status: false,
});
