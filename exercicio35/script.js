// EXERCÍCIO 35
// Nível Intermediário
// Você está desenvolvendo um sistema de gerenciamentode estoque. Crie um programa que permita ao usuárioadicionar produtos (nome, quantidade e preço) a umestoque e depois exiba o valor total do estoque.

let estoque = [];

function stok(){
    while(true){
        const produto = {};
        produto.nome = prompt("digite o nome do produto ou 'sair':\n"); 
        if(produto.nome === "sair"){
            break;
        }
        produto.quantidade = parseInt(prompt("Digite a quantidade do produto: "));
        produto.preco = parseFloat(prompt("Digite o preco do produto: "));

        estoque.push(produto);
    }
}
stok();
let valorTotalEstoque = 0;
for (const produto of estoque) {
  valorTotalEstoque += produto.quantidade * produto.preco;
}
alert(`Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);