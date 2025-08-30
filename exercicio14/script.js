/* EXERCÍCIO 14
Crie um programa que calcule a média de X númerosinseridos pelo usuário. Peça ao usuário para inserir aquantidade X e, em seguida, digitar os números. Para nofinal mostrar a média entre eles.Exemplo: Digite quantos números quer tirar a média. (porexemplo usuário digita 3). Então tem que aparecer 3vezes a  mensagem: Digite um número: (ex: digitou 10) ,Digite um número: (digitou 20), Digite um número:(digitou 5). Depois mostrar o resultado da média finalnuma mensagem: A média foi 11,67. (A soma dosnúmeros divididos por quantos números tinham). */
const pergunta = parseInt(prompt("Digite quantos números quer tirar a média:"));
let numeros;
let aux = 0;
let lista = [];
let conta = 0;
while (aux < pergunta){
    numeros = parseInt(prompt("digite o "+ (aux + 1) + "° número:"));
    lista.push(numeros);
    aux += 1;
}
let aux2 =  (lista.length);
for(let i = 0; i < aux2; i++){
    conta += parseInt(lista[i]);        
}
let total = conta/lista.length;
console.log(`a média é: + ${total.toFixed(2)}`);
