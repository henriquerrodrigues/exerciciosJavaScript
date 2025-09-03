/* EXERCÍCIO 27
Nível Intermediário
Você está desenvolvendo um sistema de agenda. Crie umprograma que permita ao usuário adicionar eventos(nome, data e hora) à agenda e depois exiba os eventosordenados por data e hora. */

function agendar(nome, data, hora) {
  this.nome = nome;
  this.data = data;
  this.hora = hora;
}

let agenda = {};
let nome = 0;
let data = 0;
let hora = 0;
let encerra = 0;
function calendario(){
    while(encerra != "s"){
     nome = prompt("digite o nome do evento: ");
     data = prompt("digite a data: dd/yy/aa ");
     hora = prompt("digite a hora: hrs:min");
     encerra = prompt("mais alguma agenda?");
    if(nome !== 0 && data !== 0 && hora !== 0){
        agenda = new agendar(nome, data, hora);
    }
  }
    return agenda;
}

console.log(calendario());



