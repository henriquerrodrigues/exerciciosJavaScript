/* EXERCÍCIO 20

Crie um programa que verifique se uma string inseridapelo usuário é um palíndromo. Um palíndromo é umapalavra que se lê igualmente de trás para frente. Ex: ovo. */

/* let palavra = prompt("digite a palavra e direi se é um palíndromo: ");
let array = [];

for(let i = palavra.length - 1; i>=0; i--){
  array.push(palavra.charAt(i));
}

// junta o array em uma string
let palavraInvertida = array.join("");

if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
  console.log("É palíndromo a palavra: " + palavra);
} else {
  console.log("Não é palíndromo");
} 
 */

let palavra = prompt("Digite a palavra ou frase: ");

// normalização: tira espaços, acentos e deixa em minúsculo
let normalizada = palavra
  .toLowerCase()
  .normalize("NFD")              // separa letras de acentos
  .replace(/[\u0300-\u036f]/g, "") // remove acentos
  .replace(/\s+/g, "");            // remove espaços

// inverte a string
let invertida = normalizada.split("").reverse().join("");

// comparação
if (normalizada === invertida) {
  console.log("É palíndromo: " + palavra);
} else {
  console.log("Não é palíndromo");
}