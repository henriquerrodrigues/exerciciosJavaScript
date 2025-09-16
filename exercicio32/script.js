// Você está desenvolvendo um sistema básico demensagem. Crie um programa que permita ao usuáriodigitar mensagens e exiba-as na tela, até que o usuáriodigite 'sair' para encerrar.

let mensagens = [];
const sair = "sair";
let escrita = "";
let opt = "";
function whatsapp(){
    while(true){
        escrita = prompt("escreva uma mensagem: ");
        alert("você escreveu: " + escrita);
        if(escrita === "sair"){
            break;
        }
        mensagens.push(escrita);
}}
whatsapp();
console.log("essas foram as mensagens escritas");
for(let mensagem of mensagens){
    console.log(mensagem + "\n");
}