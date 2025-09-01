/* EXERCÍCIO 15
Nível Fácil
Crie um programa que simule um cadastro de livro. Oprograma deve permitir ao usuário adicionarinformações, como título, autor e ano de publicação. Emseguida, o programa deve exibir os valores do livro deuma vez só.  */
let titulo = prompt("digite o título do livro: ");
let autor = prompt("digite o nome do autor: ");
let ano = prompt("digite o ano de publicação: ");

const livro = {
    titulo: titulo,
    autor: autor,
    ano: ano,
    exibe: function () {
        return "O titulo é " + this.titulo + " , o autor é: " + this.autor + " , ano é " + this.ano + ".";
    }
};

document.getElementById("texto").innerHTML = JSON.stringify(livro.exibe());