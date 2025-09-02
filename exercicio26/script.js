/* EXERCÍCIO 26
Você está criando um programa de conversão deunidades. Permita ao usuário escolher entre convertertemperatura (Celsius/Fahrenheit) ou comprimento(metros/pés). Então, solicite os valores necessários eexiba o resultado da conversão.
 */

function converte(opcao){
  while(true)
  {
  if(opcao == "1")
  {  
  const celsius = prompt("Quantos graus celcius o termomêtro está marcando? ");
  const Fahrenheit = (celsius*9/5)+32;
  console.log("A temperatura em Fahrenheit é: \n");
  return Fahrenheit;
} else if(opcao == "2")
  {
    const compMT = prompt("Quantos metros está marcando? ");
    const compPes = (compMT*3.28);
    console.log("O comprimento em pés é: \n");
    return compPes;
  }else
  {
    alert("digite uma opção válida");
  }
}
}

let opcao = prompt("digite a opção desejada: \n 1. Converte Celcius para Fahrenheit \n 2. Converte o comprimento em Metros para Pés: ");

let exibe = converte(opcao);
console.log(`${exibe.toFixed(2)}`);