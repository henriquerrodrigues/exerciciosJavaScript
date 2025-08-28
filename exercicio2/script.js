/* EXERCÍCIO 2
Crie um programa que calcule a idade do usuário. O usuário deve digitar o ano de nascimento e o programadeve exibir quantos anos ele tem */

const idade = prompt("informe seu ano de nascimento: ");
const anoAtual = 2025;

function calculaIdade(idade, ano){
  const calculo = ano - idade;
  console.log("você tem " + calculo);
}

calculaIdade(idade,anoAtual);

