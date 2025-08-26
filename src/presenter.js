const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const enviar = document.querySelector('#enviar');
const div = document.querySelector('#respuesta-div');
const edad = document.querySelector('#edad');


const getGreeting = (hour) => {
  const result = 'Buenas noches';
  if (hour >= 5 && hour < 12) {
    result = 'Buenos días';
  } if (hour >= 12 && hour < 18) {
    result = 'Buenas tardes';
  }
  return result;
};

const adjustGreetingForGenderAge = (greeting, gender, age) => {
  // Then, add formal titles for people over 30
  if (gender === 'femenino' && age > 30) {
    return `${greeting} Sra.`;
  }
  if (gender === 'masculino' && age > 30) {
    return `${greeting} Sr.`;
  }

  return greeting;
};

enviar.addEventListener('click', (event) => {
  event.preventDefault();

  const hour = new Date().getHours();
  const greeting = getGreeting(hour);
  const adjustedGreeting = adjustGreetingForGenderAge(greeting, genero.value, parseInt(edad.value));

  div.innerHTML = `<p>${adjustedGreeting} ${nombre.value}</p>`;
});
