const opt = ["Opção 1", "Opção 2", "Opção 3"];

let votos = [0,0,0];  

function vote(optIndex){
  votos[optIndex]++;
  attResultados();
}

function attResultados(){
  const totalVotos = votos.reduce((total, count) => total + count, 0);

  const optResultados = document.getElementById("opt-resultados");
  optResultados.innerHTML= "";

  opt.forEach((option, index)=>{
    const porcentagem = ((votos[index]/totalVotos)*100).toFixed(2);
    const resultadoItem = document.createElement("div");
    resultadoItem.innerHTML = `${option}: ${votos[index]} votos (${porcentagem}%)`;
    optResultados.appendChild(resultadoItem);
  });

  const totalVotosElement = document.getElementById("total-votos");
  totalVotosElement.textContent = `Total de votos: ${totalVotos}`;
    
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.classList.remove("hidden");
}
