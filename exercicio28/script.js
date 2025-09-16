/* Crie um programa que simule uma calculadora avançada.O usuário poderá escolher entre operações de adição,subtração, multiplicação, divisão e potenciação. Soliciteos valores necessários e exiba o resultado da operaçãoescolhida. */

function soma(valor1,valor2){
    let adicao = parseFloat(valor1) + parseFloat(valor2);
    adicao = adicao.toFixed(2);
    return adicao;
}
function subtrai(valor1,valor2){
    let sub = parseFloat(valor1) - parseFloat(valor2);
    sub = sub.toFixed(2);
    return sub;
}
function multiplica(valor1,valor2){
    let mult = parseFloat(valor1) * parseFloat(valor2);
    mult = mult.toFixed(2);
    return mult;
}
function divide(valor1,valor2){
    let div = parseFloat(valor1) / parseFloat(valor2);
    div = div.toFixed(2);
    return div;
}
function potenciacao(valor1,valor2){
    let pot = parseFloat(valor1) ** (parseFloat(valor2));
    return pot;
}

const val1 = prompt("digite o primeiro valor: ");
const op = prompt("digite o tipo de operação que você quer:\n1- adicao:\n2-subtracao:\n3-multiplicacao:\n4-divisão:\n5-potenciacao:");
let val2 = "";

if(op === "1"){
    val2 = prompt("digite o segundo valor adição: ");
    console.log(`o valor da adição é: \n${(soma(val1,val2))}`);
}
else{
    if(op === "2"){
        val2 = prompt("digite o segundo valor subtração: ");
        console.log(`o valor da subtração é: \n${(subtrai(val1,val2))}`);
    }else{
        if(op === "3"){
            val2 = prompt("digite o segundo valor multiplicação: ");
            console.log(`o valor da multiplicação é: \n${(multiplica(val1,val2))}`);
        }
        else{
            if(op === "4"){
                val2 = prompt("digite o segundo valor divisão: ");
                console.log(`o valor da divisão é: \n${(divide(val1,val2))}`);
            }
            else{
                val2 = prompt("digite o segundo valor potenciação: ");
                console.log(`o valor da potência é: \n${(potenciacao(val1,val2))}`);
            }
        }
    }
}