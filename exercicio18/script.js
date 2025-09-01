/* EXERCÍCIO 18
Um lojista quer calcular o preço final de um produtoapós aplicar um desconto. Crie um programa que permitaao lojista inserir o preço original e a porcentagem dedesconto. Depois mostre numa mensagem: “O preçooriginal era R$ XX,XX e o valor com X % de descontoficou R$ XX,XX. */

const produto = parseFloat(prompt("digite o valor do produto: "));
const desc = parseFloat(prompt("digite o desconto para o produto: "));
let produtoDesc = 0;

function geraDesconto(produto, desconto){
  let conta = produto*(1 - (desconto/100));
  return conta;
}

console.log(`o valor inicial do produto é: ${produto.toFixed(2)}, o valor do produto aplicado desconto é ${geraDesconto(produto, desc).toFixed(2)}`);