/* EXERCÍCIO 17
Nível Fácil
Crie um programa que encontre o maior entre trêsnúmeros. O usuário deve digitar 3 números e o programaresponder qual deles é o maior. */

const num1 = prompt("digite o primeiro número: ");
const num2 = prompt("digite o segundo número: ");
const num3 = prompt("digite o terceiro número: ");

function maior(num1,num2, num3){
  if(num1 > num2 && num1 > num3){
    return num1;
  }else
  {
    if(num2 > num3){
      return num2;
    }else{
      return num3;
    }
  }
  }

console.log("o número: " + maior(num1, num2, num3) + " é o maior");