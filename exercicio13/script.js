/* EXERCÍCIO 13
Crie um programa que verifique se um número é primoou não. Solicite um número ao usuário e depois exiba seele é primo ou não. */
const numero = prompt("digite um número:");

function primo(numero){
    for(let i=2; i<numero;i++){
        if(numero % i == 0){
            console.log("número não é primo");
            return false;
        }
    }
    return true;
}
if(primo(numero)){
    console.log("o número é primo");
}