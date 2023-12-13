
function sumar() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 + numero2
  alert(numero1 + "+" + numero2 + "=" + resultado)
}

function restar() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 - numero2
  alert(numero1 + "-" + numero2 + "=" + resultado)
}

function multiplicar() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 * numero2
  alert(numero1 + "*" + numero2 + "=" + resultado)
}

function dividir() {
  const numero1 = parseInt(prompt("Ingrese el primer numero"));
  const numero2 = parseInt(prompt("Ingrese el segundo numero"));
  const resultado = numero1 / numero2
  alert(numero1 + "/" + numero2 + "=" + resultado)

}

let operacionMat = parseInt(prompt("Elegi la operación matematica: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-Salir"));

while (operacionMat !== 5) {
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

    default:
      alert("Error, elija otra opción")
      break;

  }

  operacionMat = parseInt(prompt("Elegi la operación matematica: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-Salir"));
}
alert("Programa finalizado")