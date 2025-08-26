const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
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

const adjustGreetingForGender = (greeting, gender) => {
  if (gender === 'femenino') {
    return greeting.replace('Buenos', 'Buenas');
  }
  return greeting;
};

enviar.addEventListener('click', (event) => {
  event.preventDefault();

  const hour = new Date().getHours();
  const greeting = getGreeting(hour);
  const adjustedGreeting = adjustGreetingForGender(greeting, genero.value);

  div.innerHTML = `<p>${adjustedGreeting} ${nombre.value}</p>`;
});
