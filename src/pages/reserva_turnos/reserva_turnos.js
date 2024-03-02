const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const todayBtn = document.querySelector(".today");
const month = document.querySelector(".month");

const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const renderCalendar = () => {
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  let days = "";

  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDayDate; i++) {
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      days += `<div class="day today">${i}</div>`;
    } else {
      days += `<div class="day">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  daysContainer.innerHTML = days;
  hideTodayBtn();
};

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

todayBtn.addEventListener("click", () => {
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  renderCalendar();
});

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}

renderCalendar();

// JavaScript (reserva_de_turnos.js)

// Variables para almacenar el día y el horario seleccionados
var diaSeleccionado = '';
var horarioSeleccionado = '';

// Función para agregar controladores de eventos clic a los días del calendario
function agregarControladoresDeEventos() {
    // Obtener todos los elementos con la clase "day" (todos los días del calendario)
    var diasCalendario = document.querySelectorAll('.day');

    // Iterar sobre cada día del calendario y agregar un controlador de eventos clic
    diasCalendario.forEach(function(dia) {
        dia.addEventListener('click', function() {
            // Obtener el texto del día
            var diaTexto = dia.textContent;

            // Guardar el día seleccionado
            diaSeleccionado = diaTexto;

            // Mostrar un mensaje de confirmación (puedes eliminar esto si no es necesario)
            alert('¡Día seleccionado: ' + diaSeleccionado + '!');

            // Puedes agregar más código aquí según lo que necesites hacer con el día seleccionado
        });
    });
}

// Llamar a la función para agregar controladores de eventos inicialmente
agregarControladoresDeEventos();

// Obtener todos los elementos con la clase "hrs" (todos los botones de horarios)
var botonesHorarios = document.querySelectorAll('.hrs');

// Iterar sobre cada botón de horario y agregar un controlador de eventos clic
botonesHorarios.forEach(function(boton) {
    boton.addEventListener('click', function() {
        // Obtener el texto del botón (el horario)
        var horario = boton.textContent;

        // Guardar el horario seleccionado
        horarioSeleccionado = horario;

        // Verificar si se ha seleccionado un día del calendario
        if (diaSeleccionado !== '') {
            // Si se ha seleccionado un día y un horario, guardar ambos datos
            var diaYHorarioSeleccionados = diaSeleccionado + ' ' + horarioSeleccionado;

            // Guardar el día y el horario combinados en localStorage (puedes cambiar esto según tus necesidades)
            localStorage.setItem('diaYHorarioSeleccionados', diaYHorarioSeleccionados);

            // Mostrar un mensaje de confirmación (puedes eliminar esto si no es necesario)
            alert('¡Día y horario seleccionados: ' + diaYHorarioSeleccionados + '!');

            // Puedes agregar más código aquí según lo que necesites hacer con el día y el horario seleccionados
        } else {
            // Si no se ha seleccionado un día del calendario, mostrar un mensaje de error (puedes eliminar esto si lo prefieres)
            alert('Por favor, selecciona un día del calendario primero.');
        }
    });
});

