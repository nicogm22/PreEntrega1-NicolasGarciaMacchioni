const sumarBoton = document.getElementById('sumarBoton');
const restarBoton = document.getElementById('restarBoton');
const multiplicarBoton = document.getElementById('multiplicarBoton');
const dividirBoton = document.getElementById('dividirBoton');
const verHistorialBoton = document.getElementById('verHistorialBoton');

sumarBoton.addEventListener('click', sumar);
restarBoton.addEventListener('click', restar);
multiplicarBoton.addEventListener('click', multiplicar);
dividirBoton.addEventListener('click', dividir);
verHistorialBoton.addEventListener('click', verHistorial);

const historial = [];

class Operacion {
  constructor(simbolo, numero1, numero2, resultado) {
    this.simbolo = simbolo;
    this.numero1 = numero1;
    this.numero2 = numero2;
    this.resultado = resultado;
  }
}

function obtenerNumeros() {
  const numero1 = parseInt(document.getElementById('numero1').value);
  const numero2 = parseInt(document.getElementById('numero2').value);

  if (isNaN(numero1) || isNaN(numero2)) {
    mostrarError("Por favor, ingrese números válidos.");
    return null;
  }

  return { numero1, numero2 };
}


function mostrarError(mensaje) {
  const mensajeError = document.getElementById('mensaje-error');
  mensajeError.textContent = mensaje;
  setTimeout(() => {
    mensajeError.textContent = '';
  }, 3000);
}

function sumar() {
  const numeros = obtenerNumeros();
  if (numeros) {
    const resultado = numeros.numero1 + numeros.numero2;
    guardarOperacion("+", numeros.numero1, numeros.numero2, resultado);
    mostrarResultado(resultado);
  }
}

function restar() {
  const numeros = obtenerNumeros();
  if (numeros) {
    const resultado = numeros.numero1 - numeros.numero2;
    guardarOperacion("-", numeros.numero1, numeros.numero2, resultado);
    mostrarResultado(resultado);
  }
}

function multiplicar() {
  const numeros = obtenerNumeros();
  if (numeros) {
    const resultado = numeros.numero1 * numeros.numero2;
    guardarOperacion("*", numeros.numero1, numeros.numero2, resultado);
    mostrarResultado(resultado);
  }
}

function dividir() {
  const numeros = obtenerNumeros();
  if (numeros && numeros.numero2 !== 0) {
    const resultado = numeros.numero1 / numeros.numero2;
    guardarOperacion("/", numeros.numero1, numeros.numero2, resultado);
    mostrarResultado(resultado);
  } else {
    mostrarError("No se puede dividir por cero.");
  }
}

function guardarOperacion(simbolo, numero1, numero2, resultado) {
  const operacion = new Operacion(simbolo, numero1, numero2, resultado);
  historial.push(operacion);
  mostrarResultado();
}

function mostrarResultado(resultado) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = `Resultado: ${resultado}`;
}

function verHistorial() {
  const historialDiv = document.getElementById('historial');
  historialDiv.innerHTML = '';

  historial.forEach((operacion) => {
    const p = document.createElement('p');
    p.textContent = `${operacion.numero1} ${operacion.simbolo} ${operacion.numero2} = ${operacion.resultado}`;
    historialDiv.appendChild(p);
  });
}