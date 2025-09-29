// EXERCÍCIO 40
// Nível Avançado
// Crie um cronômetro com botões de 'Iniciar', 'Pausar' e'Zerar'. Quando o cronômetro é iniciado, ele deve começara contar o tempo em segundos. O usuário pode pausar ocronômetro e, se desejar, zerá-lo.

// document.getElementById() ; addEventListener("click", () => {cronometro = setInterval(() => {});}); clearInterval(cronometro); .textContent = ``;

const tempoElemento = document.getElementById("tempo");
const botaoIniciar = document.getElementById("iniciar");
const botaoPausar = document.getElementById("pausar");
const botaoZerar = document.getElementById("zerar");

let cronometro;
let tempo = 0;

botaoIniciar.addEventListener("click", () => {
    cronometro = setInterval(() => {
        tempo++;
        tempoElemento.textContent = `${tempo} segundos`;
    }, 1000);
});

botaoPausar.addEventListener("click", () => {
    clearInterval(cronometro);
})

botaoZerar.addEventListener("click", () => {
    clearInterval(cronometro);
    tempo = 0;
    tempoElemento.textContent = `${tempo} segundos`;
})






