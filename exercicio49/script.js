// Elementos do DOM
const eventTitleInput = document.getElementById("event-title");
const eventDateInput = document.getElementById("event-date");
const eventTimeInput = document.getElementById("event-time");
const addEventButton = document.getElementById("add-event");
const eventsList = document.getElementById("events");

// Array para armazenar os eventos
const eventArray = [];

// Função para adicionar um evento
function addEvent() {
  const title = eventTitleInput.value;
  const date = eventDateInput.value;
  const time = eventTimeInput.value;
  const dateTime = new Date(`${date}T${time}`);

  if (title && dateTime) {
    eventArray.push({ title, dateTime });
    renderEvents();
  }
}

// Função para renderizar os eventos na lista
function renderEvents() {
  eventsList.innerHTML = "";
  eventArray.forEach((event) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${
      event.title
    } - ${event.dateTime.toLocaleString()}`;
    if (event.dateTime > new Date()) {
      listItem.style.fontWeight = "bold";
    }
    eventsList.appendChild(listItem);
  });
}

// Event listener para o botão "Adicionar"
addEventButton.addEventListener("click", addEvent);

// Inicialização
renderEvents();
    