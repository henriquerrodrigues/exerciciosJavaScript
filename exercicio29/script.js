// Vamos fazer um jogo de adivinhação mais avançado.Crie um programa que escolha um número aleatórioentre 1 e 200, e permita ao usuário adivinhar o número.Dê dicas de 'maior', 'menor', 'muito longe' e 'muito perto'até o usuário acertar.

function adivinha(){
    let numero = "";
    alert("Jogo de quente e frio \nadvinhe o número");
    let numEscolhido = parseInt((Math.random()*200)+1);
    alert(numEscolhido);
    let muitoMaior = 0;
    while(true){
        numero = prompt("escolha um número de 1 a 200: ");
        muitoMaior = Math.max(numero, numEscolhido);
        numero = parseInt(numero);
        if(numero == numEscolhido){
            alert(`Acertouu - o número escolhido era: \n${numEscolhido}`);
            break;
        }
        else{
            if(numero > numEscolhido){
                if(muitoMaior - numEscolhido > 50){
                    alert("muitooo frio");
                }else{
                    if(muitoMaior - numEscolhido < 10){
                        alert("muitoo quente");
                    }
                }
                alert(`O número é menor que ${numero}`);
            }else{
                if(muitoMaior - numero > 50){
                    alert("muitooo frio");
                }else{
                    if(muitoMaior - numero < 10 && (muitoMaior !== numero)){
                        alert("muitoo quente");
                    }
                }
                alert(`O número é maior que ${numero}`);
            }
        }
    }
}

adivinha();