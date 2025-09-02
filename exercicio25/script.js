/* EXERCÍCIO 25
Nível Intermediário
Crie um pequeno jogo que gere um número aleatórioentre 1 e 100 e permita ao usuário tentar adivinhar qualé esse número. Dê dicas de 'maior' ou 'menor' até ousuário acertar. */

let numeroRandom = parseInt(Math.random() * 101);
alert("tente adivinha o número de 1 a 100");
while(true){
  let tentativa = prompt("escolha um número: ");
  if(numeroRandom==tentativa){
    alert("acertou");
    break;
  }
  else{
    if(tentativa > numeroRandom){
      alert("número escolhido é menor que " + tentativa);
    }else
    {
      alert("número escolhido é maior que " + tentativa);
    }
  }
}