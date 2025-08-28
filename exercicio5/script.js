/* EXERCÍCIO 5
Nível Fácil
Crie um programa que verifique se um número é par ouímpar. Solicite um número ao usuário e exiba o resultado.
 */
const numero = prompt("Digite um número: ");
conta = numero % 2;
if(conta ==0){
    alert("o número " +numero+" é par");
}else{
        alert("o número " +numero+" é impar");
}