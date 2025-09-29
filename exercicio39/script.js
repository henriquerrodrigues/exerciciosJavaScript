// EXERCÍCIO 39
// Nível Intermediário
// Crie uma simulação de um jogo de corrida. O jogadordeve escolher entre três opções para avançar. A cadaavanço, um evento aleatório pode ocorrer, que podeajudar ou atrapalhar o jogador. O objetivo é chegar aofinal da corrida e se possível ganhar a corrida.
// As regras são as seguintes. A corrida tem 10 voltas. Ogrid de largada tem 12 competidores. Deve-se gerar umnúmero aleatório para indicar em qual posição o usuáriovai largar. Depois, a cada volta o usuário pode escolheracelerar ao máximo, defender, ou manter o ritmo.Acelerar ao máximo tem uma chance mais alta derealizar uma ultrapassagem e subir no grid, mastambém de quebrar o carro. Defender tem uma chancemais alta de manter a posição do que perder posição enão quebra o carro. Já o manter o ritmo tem uma chanceequilibrada entre ultrapassar, manter a posição ouperder a posição, mas nunca quebra o carro. Ao final donúmero de voltas deve-se mostrar qual posição ousuário terminou. Se terminar em primeiro, deve semostrar uma mensagem especial de que ele ganhou acorrida. Se não, apenas mostrar qual posição eleterminou a corrida. Se quebrar o carro a corrida termina  na hora e deve-se dar opção de começar novamente.

alert("bem vindo ao jogo de corrida! Você vai competir em uma corrida com 12 competidores ao longo de 10 voltas.");

const gridLargada = Math.floor(Math.random()*12)+1;
alert(`Você largará na posição ${gridLargada}. Boa sorte na corrida!\n`);

//posição do jogador na largada
let posicao = gridLargada;

for(let volta=1; volta <= 10; volta ++){
    alert(`Volta ${volta}/10 - Você está na posição ${posicao} de 12.`);

    //solicita escolha do jogador
      const escolha = prompt(
    "Escolha: '1' para acelerar ao máximo, '2' para defender, '3' para manter o ritmo: "
    );

    //ação
    if(escolha === "1"){
        const chanceUltrapassagem = Math.random();
        if(chanceUltrapassagem < 0.7){
            posicao = Math.max(1, posicao -1);//aumenta posição após ultrapassagem
            alert("Você realizou uma ultrapassagem e subiu no grid!");
        }
        else if(chanceUltrapassagem < 0.85)
        {
            alert("Você quebrou o carro e teve que abandonar a corrida.");
            break;
        }
        else
        {
            posicao = Math.min(12, posicao + 1); // Reduzir a posição após quebrar o carro
            alert("Você quebrou o carro, mas conseguiu se recuperar.");
        }
    } else if (escolha === "2") {
        // Cálculo da chance de defesa e ações correspondentes
        const chanceDefesa = Math.random();
        if (chanceDefesa < 0.8) {
        posicao = posicao;
        alert("Você conseguiu defender sua posição.");
        } else {
        posicao = Math.min(12, posicao + 1); // Aumentar a posição após perder posição
        alert("Você perdeu uma posição ao tentar defender.");
        }
    } else if (escolha === "3") {
    // Cálculo da chance de manter o ritmo e ações correspondentes
    const chanceManterRitmo = Math.random();
    if (chanceManterRitmo < 0.5) {
      posicao = Math.max(1, posicao - 1); // Aumentar a posição após manter o ritmo
      alert("Você ganhou uma posição ao manter o ritmo.");
    } else if (chanceManterRitmo < 0.75) {
      posicao = posicao;
      alert("Você manteve sua posição.");
    } else {
      posicao = Math.min(12, posicao + 1); // Aumentar a posição após perder posição
      alert("Você perdeu uma posição ao tentar manter o ritmo.");
    }
  } else {
    // Ação em caso de escolha inválida
    alert("Escolha inválida. Escolha '1', '2' ou '3'.");
    volta--; // Reduzir a volta para garantir que a volta não seja contada
  }

    // Verificação de condições de vitória ou fim da corrida
  if (posicao === 1 && volta === 10) {
    alert("Você venceu a corrida!");
    break;
  } else if (volta === 10) {
    alert(`Fim da corrida! Você terminou na posição ${posicao} de 12.`);
  }
}

    // Pergunta se o jogador deseja recomeçar o jogo
    const recomecar = prompt("Deseja jogar novamente? ('sim' para recomeçar)");
    if (recomecar.toLowerCase() === "sim") {
    window.location.reload(); // Recarregar a página para recomeçar o jogo
    }
