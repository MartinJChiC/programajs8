// Función para pedir un número y validar la entrada
function pedirNumero(mensaje) {
    let numero;
    do {
      numero = prompt(mensaje);
      numero = parseFloat(numero); // Convertir a número decimal

      // Validar si la entrada es un número
      if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
      }
    } while (isNaN(numero)); // Repetir hasta que se ingrese un número válido
    return numero;
  }

  // Función para sumar dos números
  function sumar(num1, num2) {
    return num1 + num2;
  }

  // Función para restar dos números
  function restar(num1, num2) {
    return num1 - num2;
  }

  // Función para multiplicar dos números
  function multiplicar(num1, num2) {
    return num1 * num2;
  }

  // Pedir dos números al usuario
  const numero1 = pedirNumero("Ingrese el primer número:");
  const numero2 = pedirNumero("Ingrese el segundo número:");

  // Mostrar resultados en la consola y en una alerta
  console.log(`Resultado de sumar: ${sumar(numero1, numero2)}`);
  console.log(`Resultado de restar: ${restar(numero1, numero2)}`);
  console.log(`Resultado de multiplicar: ${multiplicar(numero1, numero2)}`);

  alert(`Resultado de sumar: ${sumar(numero1, numero2)}\n` +
        `Resultado de restar: ${restar(numero1, numero2)}\n` +
        `Resultado de multiplicar: ${multiplicar(numero1, numero2)}`);

        