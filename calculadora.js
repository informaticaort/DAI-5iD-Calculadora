import { sumar2, sumar5 } from "./calculadora/suma.js";
import { capitalize } from "./stringUtils.js";

const restar = (num1, num2) => num1 - num2; // devolver la resta de dos números
const multiplicar = (num1, num2) => num1 * num2; // devolver la multiplicación de dos números
const dividir = (num1, num2) => num1 / num2; // devolver la división de dos números

const potencia = (num1, num2) => {
  // Si el exponente es 0, cualquier número elevado a 0 es 1
  if (num2 === 0) {
    return 1;
  }

  // Inicializamos el resultado con el número base
  let resultado = num1;

  // Si el exponente es negativo, convertimos el número base a su inverso
  // y el exponente a positivo para el cálculo
  if (num2 < 0) {
    num1 = 1 / num1;
    num2 = -num2;
  }

  // Repetimos la multiplicación tantas veces como indique el exponente
  // empezando desde 1 ya que el resultado ya fue inicializado con num1
  for (let i = 1; i < num2; i++) {
    resultado *= num1;
  }
  return resultado;
}; // devolver la potencia de un número elevado a otro

const square = (n, i, j) => {
  let mid = (i + j) / 2;
  let mul = mid * mid;
  if (mul === n || Math.abs(mul - n) < 0.00001) {
    return mid;
  } else if (mul < n) {
    return square(n, mid, j);
  } else {
    return square(n, i, mid);
  }
};
// Function to find the square root of n
const raiz = (num) => {
  let i = 1;
  const found = false;
  while (!found) {
    // If n is a perfect square
    if (i * i === num) {
      return i;
    } else if (i * i > num) {
      let res = square(num, i - 1, i);
      return res;
    }
    i++;
  }
}; // la raiz cuadrada del numero dado

const factorial = (num) => {
  if (num < 0) {
    return NaN;
  }
  if (num === 0) {
    return 1; // El factorial de 0 es 1.
  }

  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i; // Multiplicar el resultado por cada número hasta alcanzar num.
  }
  return resultado;
}; // dado un numero, devolver el factorial
const fibonacci = (num) => {
  if (num <= 0) {
    return NaN; // El primer número de Fibonacci es 0.
  }
  if (num === 1) {
    return 1; // El segundo número de Fibonacci es 1.
  }

  let numAnterior = 0; // Representa F(n-2) inicialmente
  let numActual = 1; // Representa F(n-1) inicialmente
  let numSiguiente = 1; // Representa F(n) inicialmente

  // Comenzamos el ciclo desde 2 ya que ya tenemos los casos para 0 y 1.
  for (let i = 2; i <= num; i++) {
    numSiguiente = numAnterior + numActual; // F(n) = F(n-1) + F(n-2)
    numAnterior = numActual; // Preparamos para el siguiente ciclo
    numActual = numSiguiente; // Preparamos para el siguiente ciclo
  }

  return numSiguiente;
}; // dado un numero, devolver el valor de la
// sucesion de fibonacci.
// Por ejemplo fibonacci(8) = 13
// Por ejemplo fibonacci(9) = 21
const porcentaje = (num1, num2) => {
  // Verificar si num1 es 0 para evitar la división por cero.
  if (num1 === 0) {
    return "No se puede calcular el porcentaje de cero.";
  }

  // Calcular el porcentaje que representa num2 dentro de num1.
  return (num2 / num1) * 100;
}; // dado 2 numeros, devolver el porcentaje que representa el segundo dentro del primero

console.log(capitalize("HoLaMunDO"));

const CreateEvento = (evento) => {
  evento.titulo = capitalize(evento.titulo);
  evento.descripcion = capitalize(evento.descripcion);
};

const createUser = (user) => {
  user.nombre = capitalize(user.nombre);
  user.apellido = capitalize(user.apellido);
};
