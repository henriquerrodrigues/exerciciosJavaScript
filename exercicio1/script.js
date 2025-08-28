/* EXERCÍCIO 1
Nível Fácil
Crie um programa que solicite o nome do usuário e depois exiba uma mensagem de saudação: “Olá [nome dousuário], seja bem-vindo ao mundo da programação!” */

const nome = prompt("Digite seu nome: ");
alert(
  `Olá, ${nome ? nome : "visitante"}! Bem-vindo(a) ao mundo da programação!`
);
