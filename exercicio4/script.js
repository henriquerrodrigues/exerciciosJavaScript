/* EXERCÍCIO 4
Crie um programa que determine se um número épositivo, negativo ou zero. Solicite um número ao usuárioe exiba o resultado. */

const numero = prompt("Digite um número: ");

if(numero == 0){
    alert("o número " +numero+" é zero");
}else{
    if(numero>0){
        alert("o número " +numero+" é positivo");
    }else{
        alert("o número " +numero+" é negativo");
    }
}