
const historial = [];

class Operacion {
  constructor(simbolo, numero1, numero2, resultado) {
    this.simbolo = simbolo;
    this.numero1 = numero1;
    this.numero2 = numero2;
    this.resultado = resultado;
  }
}

function sumar() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 + numero2
  alert(numero1 + "+" + numero2 + "=" + resultado)
  const operacion = new Operacion("+", numero1, numero2, resultado)
  historial.push(operacion)
}

function restar() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 - numero2
  alert(numero1 + "-" + numero2 + "=" + resultado)
  const operacion = new Operacion("-", numero1, numero2, resultado)
  historial.push(operacion)
}

function multiplicar() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 * numero2
  alert(numero1 + "*" + numero2 + "=" + resultado)
  const operacion = new Operacion("*", numero1, numero2, resultado)
  historial.push(operacion)
}

function dividir() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 / numero2
  alert(numero1 + "/" + numero2 + "=" + resultado)
  const operacion = new Operacion("/", numero1, numero2, resultado)
  historial.push(operacion)
}

function verHistorial() {
  const simbolo = prompt("Elija un simbolo para filtrar historial o una de las demas opciones:\n + sumas \n - restas \n * multiplicaciones \n / divisiones \n\n 5. ver ultimas \n 6. volver al menu principal")

  if (simbolo === '5') {
    let verUltimas = '';
    historial.forEach((operacion) => {
      verUltimas = verUltimas + operacion.numero1 + operacion.simbolo + operacion.numero2 + " = " + operacion.resultado + '\n';
    });
    alert(verUltimas);
    return;
  }
  else if (simbolo === '6') {
    alert("ok! volviendo al menu principal")
    return;
  }

  const filtrado = historial.filter((elemento) => {
    return elemento.simbolo == simbolo
  })


  let mensaje = '';
  filtrado.forEach((operacion) => {
    mensaje = mensaje + operacion.numero1 + operacion.simbolo + operacion.numero2 + " = " + operacion.resultado + '\n'
  })
  alert(mensaje);


}

let operacionMat = parseInt(prompt("Elegi la operación matematica: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-ver historial \n 6-Salir"));

while (operacionMat !== 6) {
  switch (operacionMat) {

    case 1:
      sumar()
      break;

    case 2:
      restar()
      break;

    case 3:
      multiplicar()
      break;

    case 4:
      dividir()
      break;

    case 5:
      verHistorial()
      break;

    default:
      alert("Error, elija otra opción")
      break;

  }

  operacionMat = parseInt(prompt("Elegi la operación matematica: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-ver historial \n 6-Salir"));
}
alert("Programa finalizado")

console.log(historial)