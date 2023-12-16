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
class Carro {
    constructor(marca, modelo, ligado){
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = ligado;
    }
    ligarCarro(){
        this.ligado = true;
    }
    desligarCarro(){
        this.ligado = false;
    }
}

const addCarro = document.getElementById("addCarro");
const ligarCarro = document.getElementById("turnOnCarro");
const desligarCarro = document.getElementById("turnOffCarro");

var joao = new User;

joao.nome = "João Ferreira";
joao.email = "joa0fr@email.com";
joao.nascimento = "1999-05-22";
joao.role = "user";
joao.ativo = "";

joao.exibirInfos();

var meuCarro = new Carro;

// addCarro.addEventListener("click",meuCarro.adicionarCarro());
addCarro.addEventListener("click",()=>{
    meuCarro.modelo = prompt('Digite o modelo do carro:');
    meuCarro.marca = prompt('Digite a marca do carro:');
});
ligarCarro.addEventListener("click",()=>{
    meuCarro.ligarCarro;
    console.log(meuCarro.ligado);
    if(meuCarro.ligado){
        alert('O carro agora está ligado!');
    }else{
        alert('O carro agora está desligado!');
    }
});

desligarCarro.addEventListener("click",()=>{
    meuCarro.desligarCarro
    console.log(meuCarro.ligado);
    if(meuCarro.ligado){
        alert('O carro agora está ligado!');
    }else{
        alert('O carro agora está desligado!');
    }
});

