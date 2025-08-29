/* EXERCÍCIO 11
Nível Fácil
Crie um programa que conte quantas vogais existem emuma palavra inserida pelo usuário. */

const palavra = prompt("digite uma palavra:");

const contaVogal = palavra.toLowerCase();

let contagem = 0;

for(let i = 0;i<contaVogal.length;i++){
    aux = contaVogal[i];
    if(
    aux == "a" ||
    aux == "e" ||
    aux == "i" ||
    aux == "o" ||
    aux == "u"
    ){
        contagem ++;
    }else{
        continue;
    }
}

alert(contagem);