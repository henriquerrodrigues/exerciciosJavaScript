/* EXERCÍCIO 22
Crie um programa que converta um número decimal emsua representação binária. Solicite ao usuário um númerodecimal e exiba sua representação binária. */

const numero = prompt("insira um número que será convertido em binário: ");
array = [];
function converteBin (numero, array) {
  while(numero > 0){
    let aux = numero % 2;
    numero = Math.floor(numero / 2);
    array.push(aux);
  }
  return array.reverse().join('');
}
let binario = converteBin(numero, array);
console.log(`${numero} em binário é: ${binario}`);