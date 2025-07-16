const inputTarefa = document.getElementById('novaTarefa');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

function criarTarefa(texto) {

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  const span = document.createElement('span');
  span.textContent = texto;

  span.addEventListener('click', () => {
    span.classList.toggle('concluida');
  });

  const btnRemover = document.createElement('button');
  btnRemover.className = 'btn btn-danger btn-sm';
  btnRemover.textContent = 'Remover';

  btnRemover.addEventListener('click', () => {
    listaTarefas.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(btnRemover);

  return li;
}

btnAdicionar.addEventListener('click', () => {
  const texto = inputTarefa.value.trim();

  if (texto !== '') {
    const tarefa = criarTarefa(texto);
    listaTarefas.appendChild(tarefa);
    inputTarefa.value = ''; 
    inputTarefa.focus(); 
  } else {
    alert('Por favor, digite uma tarefa!');
  }
});