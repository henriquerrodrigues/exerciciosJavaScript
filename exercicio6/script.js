/* EXERCICIO 6
Crie um programa que mostre os números numasequência, como se estivesse contando. Peça ao usuáriopara inserir o último número. Por exemplo: Usuário digita10. Ele deve contar 1, 2, 3, 4 ... até chegar em 10. */

let numero = parseInt(prompt("informe um número: "));

if(isNaN(numero)){
  alert("insira um número valido");
}else{
  let contagem = "Contagem \n";
  for(i=1;i<=numero;i++){
    contagem += i + "\n";
  }
  console.log(contagem);
}