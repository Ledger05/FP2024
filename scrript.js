// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// Función para restar dos números
function restar(a, b) {
  return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
  return a / b;
}

// Pedir al usuario que ingrese los números y la operación
var numero1 = parseFloat(prompt("Ingrese el primer número"));
var numero2 = parseFloat(prompt("Ingrese el segundo número"));
var operacion = prompt("Ingrese la operación (+, -, *, /)");

// Realizar la operación correspondiente
switch (operacion) {
  case "+":
    var resultado = sumar(numero1, numero2);
    break;
  case "-":
    var resultado = restar(numero1, numero2);
    break;
  case "*":
    var resultado = multiplicar(numero1, numero2);
    break;
  case "/":
    var resultado = dividir(numero1, numero2);
    break;
  default:
    var resultado = "Operación no válida";
}

// Mostrar el resultado
alert("El resultado es: " + resultado);
