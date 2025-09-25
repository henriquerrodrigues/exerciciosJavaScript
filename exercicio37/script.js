// EXERCÍCIO 37
// Nível Intermediário
// Você está desenvolvendo um sistema de controle degastos. Crie um programa que permita ao usuárioregistrar transações financeiras (despesa ou receita) comum valor e uma descrição. Exiba o saldo final após astransações.

// Primeiro peça para o usuário digitar o tipo da transação'despesa', 'receita' ou 'sair' para encerrar. Em seguida eledeve digitar o valor da transação e depois a descriçãodela. Ao digitar sair o programa deve apresentar a listade despesas e receitas bem como o saldo final.

// Dica: Use uma estrutura de repetiçãopara coletar as transações uma a uma.Crie um objeto para representar cadatransação, com propriedades como'tipo', 'valor' e 'descrição'. Armazeneesses objetos em um array. Paracalcular o saldo final, percorra o arrayde transações e atualize o saldo deacordo com o tipo de cada transação
let conta = [];
function banco(){
    while(true){
        const transacao = {};

        transacao.tipo = prompt("digite o tipo da transação'despesa', 'receita' ou 'sair' para encerrar");
        if(transacao.tipo === "sair"){
            break;
        }

        transacao.valor = parseFloat(prompt("Digite o valor da transação(R$): "));

        transacao.desc = prompt("digite uma breve descrição da transação: ");

        conta.push(transacao);
    }
    let saldoBancario = 0;
    for(const transacao of conta){
        if(transacao.tipo === "despesa"){
            saldoBancario -= transacao.valor;
        }else{
            saldoBancario += transacao.valor;
        }
    }
    return(saldoBancario);
}
let total = banco();
for(const transacao in conta){
    console.log(` ${transacao.tipo} \n ${transacao.valor} \n ${transacao.desc} \n === \n`);
}
console.log("saldo final: " + total);