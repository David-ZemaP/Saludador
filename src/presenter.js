import { getGreeting, adjustGreetingForGenderAge } from './saludador.js';

const nombre = document.querySelector('#nombre');
const genero = document.querySelector('#genero');
const enviar = document.querySelector('#enviar');
const div = document.querySelector('#respuesta-div');
const edad = document.querySelector('#edad');


enviar.addEventListener('click', (event) => {
  event.preventDefault();

  const hour = new Date().getHours();
  const greeting = getGreeting(hour);
  const adjustedGreeting = adjustGreetingForGenderAge(greeting, genero.value, parseInt(edad.value));

  div.innerHTML = `<p>${adjustedGreeting} ${nombre.value}</p>`;
});
