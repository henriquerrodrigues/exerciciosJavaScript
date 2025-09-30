// EXERCÍCIO 44
// Crie um sistema de carrinho de compras. O usuário devever uma lista de produtos, poder adicionar itens aocarrinho, ver o total de compra e remover itens docarrinho.

const produtos = [
  {id: 1, nome: "Produto 1", valor: 10},
  {id: 2, nome: "Produto 2", valor: 15},
  {id: 3, nome: "Produto 3", valor: 20},

];

const carrinho = [];

function exibeProdutos(){
  const listaProdutos = document.getElementById("listaProdutos");
  listaProdutos.innerHTML = "";
  produtos.forEach((produto) =>{
    const li = document.createElement("li");
    li.innerHTML = `${produto.nome} - R$${produto.valor} <button onclick ="addCarrinho(${produto.id})">Adicionar</button>`;
    listaProdutos.appendChild(li);  
  })
}

function adicionaCarrinho(idProduto){
  const produtoAdd = produtos.find((produto) => produto.id === idProduto);

  if(produtoAdd){
    const existeNoCarrinho = carrinho.find((item) => item.id === idProduto);
    if(existeNoCarrinho){
      existeNoCarrinho.quantidade++;
    }else{
      carrinho.push({...produtoAdd, quantidade: 1});
    }
    exibeCarrinho();
  } 
}

function exibeCarrinho(){
  const listaCarrinho = document.getElementById("carrinho");
  const totalExibido = document.getElementById("total");
}



exibeProdutos();

