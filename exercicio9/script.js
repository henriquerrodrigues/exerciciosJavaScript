/* EXERCÍCIO 9
Nível Fácil
Crie um programa que simule um jogo de adivinhação.Escolha um número aleatório entre 1 e 10 e diga se eleacertou ou errou e então mostre qual era o número. */

const numero = prompt("digite um número:");
const aleatorio = Math.floor(Math.random() * 10) + 1;

numero == aleatorio ? alert(`Você escolheu o ${numero} e o número que sortei foi: ${aleatorio}, portanto acertou`) : alert(`Você escolheu o ${numero} e o número que sortei foi: ${aleatorio}, portanto errouuuu`);