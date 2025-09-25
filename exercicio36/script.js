// EXERCÍCIO 36
// Crie um programa que exiba uma mensagem através deum temporizador. Você deve pedir para o usuário definirum determinado intervalo de tempo em segundos etambém qual mensagem que deve aparecer depois destetempo. Então, depois daquela quantidade de tempodefinida pelo usuário a mensagem aparecer na tela.
const texto = prompt("escreva o texto a ser exibido:"); 
const tempo = parseInt(prompt("escreva o tempo de delay(segundos): "));

function delay(){
    alert(`o texto a ser exibido é ${texto}`);
}
setTimeout(delay, tempo*1000);