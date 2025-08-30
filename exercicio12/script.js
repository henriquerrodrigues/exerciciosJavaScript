/* EXERCÍCIO 12
Crie um programa que exiba apenas os números pares de1 a 100. Neste exercício o usuário não precisa darnenhuma entrada. */
const pares = [];   
let c = 0;
for(let i=1; i<=100; i++){
    if(i%2==0){
        pares.push(i);
        console.log(pares[c]);
        c+=1;
    }
}