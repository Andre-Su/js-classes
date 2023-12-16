class User {
    constructor(nome, email, nascimento, role, ativo){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role;
        this.ativo = ativo;
    }

    exibirInfos(){
        console.log(`Informações do usuário ${this.nome}: ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`)
    }
}

var joao = new User;

joao.nome = "João Ferreira";
joao.email = "joa0fr@email.com";
joao.nascimento = "1999-05-22";
joao.role = "user";
joao.ativo = "";

joao.exibirInfos();
