// Variable para guardar el valor actual
let numero = 0;

// Elemento donde mostramos el número
const contadorElemento = document.getElementById("contador");

// Función para aumentar el valor
function sumar() {
    numero++;
    contadorElemento.textContent = numero;
}

// Función para disminuir el valor
function restar() {
    numero--;
    contadorElemento.textContent = numero;
}

// Función para volver a cero
function reiniciar() {
    numero = 0;
    contadorElemento.textContent = numero;
}