const nombre = document.querySelector('#nombre');
const enviar = document.querySelector('#enviar');
const div = document.querySelector('#respuesta-div');

enviar.addEventListener('click', (event) => {
  event.preventDefault();
  
  div.innerHTML = '<p>Hola ' + nombre.value + '</p>';
});
