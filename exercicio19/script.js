/* EXERCÍCIO 19
Nível Fácil
Você está criando um catálogo de livros e precisacalcular o preço total de uma compra. O cliente comprouvários livros, cada um com um preço diferente. Crie umprograma que solicite quantos livros foram comprados,depois informe os preços de cada livro comprado e porfim mostre o valor total da compra para o usuário. */

const quant = parseInt(prompt("quantos livros foram adquiridos: "));
let array=[];
let somaTotal = 0;

for(let i=0; i<quant; i++){
  let valorString = prompt("informe o valor deste livro: ");
  let valor = parseFloat(valorString.replace(',', '.'));
  array.push(valor);
}
console.log(`Valores dos livros:\n`);
for(let valores of array){
  somaTotal += valores;
  console.log("R$" + valores + "\n");
}

console.log(`Valor total dos livros:\n R$ ${somaTotal.toFixed(2)}`);