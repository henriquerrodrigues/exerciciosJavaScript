/* EXERCÍCIO 27
Nível Intermediário
Você está desenvolvendo um sistema de agenda. Crie umprograma que permita ao usuário adicionar eventos(nome, data e hora) à agenda e depois exiba os eventosordenados por data e hora. */

class Agendar{
  constructor(valor1, valor2, valor3){
    this.nome = valor1;
    this.data = valor2;
    this.hora = valor3;
  }
  exibeEvento(calendario) {
    for(let i = 0; i<calendario.length; i++){
      console.log("evento: "+ calendario[i] + "\n");
    }
  }
}

let reserva = 0;
let data = 0;
let hora = 0;
while(reserva !=""){
  reserva = prompt("digite o nome evento para a agenda: ");
  
}




