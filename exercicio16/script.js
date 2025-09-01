/* EXERCÍCIO 16
Você foi contratado para ajudar a calcular a média finaldas notas de um aluno. O aluno fez três provas, cada umacom um peso (valor máximo da nota) diferente. As notase os pesos são fornecidos. Calcule a média ponderada doaluno. */


function media() {
  alert(`use "." para números quebrados`);
  const notaA1 = parseFloat(prompt("Digite o nota da A1:"));
  const notaA2 = parseFloat(prompt("Digite o nota da A2:"));
  const notaA3 = parseFloat(prompt("Digite o nota da A3:"));
  const a1 = parseFloat(prompt("Digite o peso da A1:"));
  const a2 = parseFloat(prompt("Digite o peso da A2:"));
  const a3 = parseFloat(prompt("Digite o peso da A3:"));

  let notaFinal = (notaA1*a1 + notaA2*a2 + notaA3*a3)/(a1+a2+a3);
  return notaFinal;
}
alert(`A média final do aluno é: ${media().toFixed(2)}`);



