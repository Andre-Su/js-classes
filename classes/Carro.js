
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
const carroInfo = document.getElementById("infocarro");

var meuCarro = new Carro;
function listcarro(){
    var ligado;
    if (meuCarro.ligado){
        ligado = "sim"
    }else{
        ligado = "não"
    }
    carroInfo.innerHTML = 
    `Marca: ${meuCarro.marca}<br>
    Modelo: ${meuCarro.modelo}<br>
    Ligado: ${ligado}`
}
addCarro.addEventListener("click",()=>{
    meuCarro.marca = prompt('Digite a marca do carro:');
    meuCarro.modelo = prompt('Digite o modelo do carro:');
    listcarro()
});
ligarCarro.addEventListener("click",()=>{
    meuCarro.ligarCarro;
    console.log(meuCarro.ligado);
    if(meuCarro.ligado){
        alert('O carro agora está ligado!');
    }else{
        alert('O carro agora está desligado!');
    }
    listcarro();
});

desligarCarro.addEventListener("click",()=>{
    meuCarro.desligarCarro
    console.log(meuCarro.ligado);
    if(meuCarro.ligado){
        alert('O carro agora está ligado!');
    }else{
        alert('O carro agora está desligado!');
    }
    listcarro();
});

