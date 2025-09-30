

const buscaElemento = document.getElementById("busca");

const listaElemento = document.getElementById("lista");

buscaElemento.addEventListener("input", () =>
{
    const termoBusca = buscaElemento.value.toLowerCase();

    const itens = listaElemento.getElementsByTagName("li");
    
  for (const item of itens) {
    // Verifica se o conteúdo de texto do item em letras minúsculas contém o termo de busca
    if (item.textContent.toLowerCase().includes(termoBusca)) {
      // Se o termo de busca estiver contido, adiciona a classe "destacado" ao item
        item.classList.add("destacado");
    } else {
      // Caso contrário, remove a classe "destacado" do item
      item.classList.remove("destacado");
    }
  }
});