// EXERCÍCIO 41
// Nível Avançado
// Crie uma lista de tarefas. O usuário pode adicionar novastarefas, marcá-las como concluídas e removê-las da lista.As tarefas concluídas devem ter uma aparênciadiferente.

const tarefa = document.getElementById("txtTarefa");
const botaoAdd = document.getElementById("btnAdd");


botaoAdd.addEventListener("click", () => {
    const listaTarefas = document.getElementById("lista");
    const textoDigitado = document.getElementById("txtTarefa").value;
    // textoDigitado = textoDigitado.value;
    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = `${textoDigitado}`;
    const botaoRemove = document.createElement('button');
    botaoRemove.textContent = `remover`;
    novaTarefa.appendChild(botaoRemove);
    listaTarefas.appendChild(novaTarefa);
    botaoRemove.addEventListener("click", () => {
    novaTarefa.remove();
})
});