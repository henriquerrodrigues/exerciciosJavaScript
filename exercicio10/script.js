/* EXERCÍCIO 10
Crie um programa que determine se um ano é bissexto ou não. Peça ao usuário para inserir um ano e mostre seé bissexto ou não. */

/* Dica: Um ano é bissexto se for divisível por 4, mas não por 100, a menos que também seja divisível por400.
 */
const ano = prompt("escolha um ano e direi se é bissexto:");

if(ano % 4 == 0){
    if(ano % 100 == 0){
        (ano % 400 == 0) ? alert("ano bissexto") : alert("ano não é bissexto");
    }
    else{
        alert("ano bissexto");
    }
}else{
    alert("ano não é bissexto");
}