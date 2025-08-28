/* EXERCÍCIO 3
Nível Fácil
Crie um programa que converta graus Celsius paraFahrenheit. Peça ao usuário a temperatura em Celsius e depois exiba o equivalente em Fahrenheit. */

const celsius = prompt("Quantos graus celcius o termomêtro está marcando? ");

function converteTemp(temperatura){
 const Fahrenheit = (temperatura*9/5)+32;
 return Fahrenheit;
}
Fahrenheit = converteTemp(celsius);
alert(`A temperatura em Fahrenheit é ${Fahrenheit.toFixed(2)} °F.`);

/* EXERCICIO USANDO FUNÇÃO E NÚMEROS APÓS A VÍRGULA */