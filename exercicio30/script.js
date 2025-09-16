// Você está desenvolvendo um programa de tradução deemojis. Crie um programa que permita ao usuário inseriruma frase e substitua determinadas palavras por emojiscorrespondentes (por exemplo, troque 'feliz' por 😀 e'triste' por 😢)."

const emojis = {
    feliz: "😀",
    triste: "😢",
    surpreso: "😲",
    brabo: "😡",
    amor: "❤️"
};

const frase = prompt("digite uma frase: ");
const palavras = frase.split(" ");


let fraseTraduzida = "";

for(const palavra of palavras){
    if (palavra.toLowerCase() in emojis){
        fraseTraduzida += emojis[palavra.toLowerCase()];
    }
    else{
        fraseTraduzida += palavra;
    }
    fraseTraduzida +=" ";
}

alert(`A frase traduzida é: ${fraseTraduzida}`);