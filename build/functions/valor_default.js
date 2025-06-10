"use strict";
console.log("==========funcao=cadastro========");
function cadastro(email, senha, nome = "Sem nome", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
cadastro("teste@teste.com", "123123", "Jhonata", 21);
console.log("==========funcao=loja========");
function cadastroLoja(nome, email, status = false) {
    console.log(nome);
    if (status === false) {
        console.log("Loja fechada");
    }
    else {
        console.log("Loja aberta");
    }
    return status;
}
cadastroLoja("Loja Jhow", "jg@teste.com", true);
