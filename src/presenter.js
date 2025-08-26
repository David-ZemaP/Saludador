const nombre = document.querySelector('#nombre');
const enviar = document.querySelector('#enviar');
const div = document.querySelector('#respuesta-div');

const getGreeting = (hour) => {
  const result = 'Buenas noches';
  if (hour >= 5 && hour < 12) {
    result = 'Buenos días';
  } if (hour >= 12 && hour < 18) {
    result = 'Buenas tardes';
  }
  return result;
};

enviar.addEventListener('click', (event) => {
  event.preventDefault();

  const hour = new Date().getHours();

  div.innerHTML = `<p>${getGreeting(hour)} ${nombre.value}</p>`;
});
