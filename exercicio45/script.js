// EXERCÍCIO 45
// Nível Avançado
// Crie um sistema de galeria de imagens. Mostre umaimagem grande e miniaturas de outras imagens abaixo.Quando o usuário clicar em uma miniatura, a imagemgrande deve mudar para corresponder à miniaturaclicada

const imagemGrandeElemento = document.getElementById("imagemGrande");
const miniaturasElemento = document.querySelectorAll(".miniatura");

miniaturasElemento.forEach((miniatura) => {
  miniatura.addEventListener("click", () => {
    const novaSrc = miniatura.getAttribute("data-src");
    imagemGrandeElemento.setAttribute("src", novaSrc);
  });
});
