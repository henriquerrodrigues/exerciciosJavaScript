// EXERCÍCIO 38
// Nível Intermediário
// Você está desenvolvendo um programa de busca em umdicionário de palavras. Crie um programa que permita aousuário buscar o significado de palavras. Use um objetopara mapear as palavras para seus significados.
// Dica: Use um objeto para armazenar odicionário de palavras e seussignificados.
// Link: https://is.gd/mxEklW
// Primeiro peça para o usuário digitar uma palavra parabuscar o significado. Se a palavra estiver no seudicionário, mostrar a palavra e seu significado. Se não,mostrar uma mensagem: A palavra [palavra buscada]não foi encontrada no dicionário.

let dicionario = 
{ amor: "aquilo que não se explica, se sente",
  pesente: "dos tempos, uma dádiva",
  resiliencia: "termo emprestado da física, significa: pode dobrar que não quebra"
};

let palavra = prompt("peça o siginificado de uma palavra ao Aurélio: ");
if(palavra in dicionario){
    console.log(dicionario);
}
