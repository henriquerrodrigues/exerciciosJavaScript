/* EXERCÍCIO 7
Nível Fácil
Crie um programa que calcule o preço final de umproduto após aplicar um desconto. Peça o preço originale a porcentagem de desconto */

const numero = parseFloat(prompt("informe um valor: "));
const desconto = parseFloat(prompt("informe o desconto(em porcentagem): "));
const descontoSimplificado = 1 - (desconto/100);
function precinho(valor, desconto){
  const calcula = numero * desconto;
  return calcula;
}

console.log("O valor: R$ " + numero.toFixed(2) + ", com desconto de: " + desconto + "%\n");
console.log(`Fica no precinho de R$ ${precinho(numero, descontoSimplificado).toFixed(2)}`)
