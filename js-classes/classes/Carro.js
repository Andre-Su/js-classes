class Carro {
    constructor(marca, modelo, ligado){
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = ligado;
    }
    adicionarCarro(){
        this.modelo = prompt('Digite o modelo do carro:');
        this.marca = prompt('Digite a marca do carro:');
    }
    ligarCarro(){
        alert('O carro agora está ligado!');
        this.ligado = true;
    }
    desligarCarro(){
        alert('O carro agora está desligado!');
        this.ligado = false;
    }
}

export {Carro};