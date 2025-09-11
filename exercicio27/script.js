/* EXERCÍCIO 27
Nível Intermediário
Você está desenvolvendo um sistema de agenda. Crie umprograma que permita ao usuário adicionar eventos(nome, data e hora) à agenda e depois exiba os eventosordenados por data e hora. */

const agenda = [];

while(true){
  const evento = {};

  evento.nome = prompt("digite o nome do evento ou sair para encerrar: ");

  if(evento.nome.toLowerCase() === "sair"){
    break;
  }
  evento.data = prompt("Digite a data no formato DD/MM/AAAA: ");
  evento.hora = prompt("Digite a hora no formato HH:MM: ");

  agenda.push(evento);
}

agenda.sort((evento1, evento2) => {
  const dataHora1 = new Date(`${evento1.data} ${evento1.hora}`);
  const dataHora2 = new Date(`${evento2.data} ${evento2.hora}`);
  return datahora1 - dataHora2;
})

//exibe os eventos em ordem
alert("Eventos na agenda: ");
for(const evento of agenda){
  alert(`Evento: ${evento.nome}\nData: ${evento.data}\nHora ${evento.hora}`);
}
