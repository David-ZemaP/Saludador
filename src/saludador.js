const nombre = document.getElementById("#nombre");
const form = document.querySelector("#saludar-form");

form.addEventListener("click", (event) => {
  event.preventDefault();

  div.innerHTML = "<p> Hola " + nombre + "</p>";
});
