/* EXERCÍCIO 21
Nível Intermediário
Você está desenvolvendo um projeto de lista de tarefas.Crie um programa que permita ao usuário adicionarvárias tarefas a uma lista e, em seguida, exiba as tarefasna ordem em que foram adicionadas.
 */

let array = [];
let c = 0;
while (true){
  let tarefa = prompt("insira uma tarefa a ser realizada: ");
  if(tarefa == ''){
    break; 
  }
  array.push(tarefa);
  console.log(array[c] + "\n");
  c++;
}

console.log("\n lista encerrada.")