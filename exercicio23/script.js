/* EXERCÍCIO 23
Nível Intermediário
Você está construindo um sistema de votação. Crie umprograma que colete votos com nome de usuáriosdigitados livremente. Depois determine a opção maisvotada. Se houver empate, exiba todas as opçõesempatadas.
 */

function votacao(){
  let votos = {};
  while(true){
    let presidente = prompt("vote no próximo presidente de chapecó: ");
    if(presidente === ""){
      break
    }
    presidente = presidente.toLowerCase();
    
    if(votos[presidente]){
      votos[presidente] += 1;
    } else {
      votos[presidente] = 1;
    }
  }

  let maior = Math.max(...Object.values(votos));
  let vencedores = [];
  for(let candidato in votos) {
    if(votos[candidato] === maior) {
      vencedores.push(candidato);
    }
  }

  console.log("Resultado da votação:");
  for(let candidato in votos){
    console.log(`Candidato: ${candidato} - ${votos[candidato]} votos`);
  }

  if(vencedores.length > 1){
    console.log("Houve empate entre: " + vencedores.join(", "));
  } else {
    console.log("O vencedor foi: " + vencedores[0]);
  }

}

votacao();



/* let normalizada = palavra
  .toLowerCase()
  .normalize("NFD")              // separa letras de acentos
  .replace(/[\u0300-\u036f]/g, "") // remove acentos
  .replace(/\s+/g, "");  */
