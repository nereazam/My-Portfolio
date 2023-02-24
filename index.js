// Seleccionar todos los elementos <a> en la lista de navegación
var navLinks = document.querySelectorAll(".nav-links a");

// Iterar a través de los elementos <a> y agregar un controlador de eventos "click"
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el enlace navegue a una nueva página
    select(this); // Llamar a la función "select" con el elemento <a> actual como argumento
  });
});

// Función "select" para resaltar el elemento de la lista de navegación seleccionado
function select(link) {
  // Deseleccionar todos los elementos <a> de la lista de navegación
  navLinks.forEach(function (navLink) {
    navLink.classList.remove("selected");
  });

  // Seleccionar el elemento <a> actual y agregar la clase "selected"
  link.classList.add("selected");
}
