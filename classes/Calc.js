class Calc {
    constructor(number1, number2, type, memory1){
        this.number1 = number1;
        this.number2 = number2;
        this.type = type;
        this.memory1 = memory1;
    }
    // metodos
    calcular(){
        if(this.type == 1){
            this.memory1 = this.number1 + this.number2;
            return this.memory1;
        }
        if(this.type == 2){
            this.memory1 = this.number1 - this.number2;
            return this.memory1;
        }
        if(this.type == 3){
            this.memory1 = this.number1 * this.number2;
            return this.memory1;
        }
        if(this.type == 4){
            this.memory1 = this.number1 / this.number2;
            return this.memory1;
        }
    }
}

const inputN1 = document.getElementById('num1');
const inputN2 = document.getElementById('num2');
const inputType = document.getElementById('funcao');
const result = document.getElementById('result');
const calcExec = document.getElementById('calc');

var calcOb = new Calc;

inputType.addEventListener('change', ()=>{
    calcOb.type = inputType.options[inputType.selectedIndex].value;
})

calcExec.addEventListener('click', ()=>{
    calcOb.number1 = parseInt(inputN1.value);
    calcOb.number2 = parseInt(inputN2.value);
    let resposta = calcOb.calcular();
    
    result.textContent = resposta;
})

