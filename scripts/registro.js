console.log("123as")

const botonRegistro = document.getElementById('botonRegistro')
const botonInicioSesion = document.getElementById('botonInicioSesion')

botonRegistro.addEventListener('click', registrar)
botonInicioSesion.addEventListener('click', iniciarSesion)

function mostrarFormulario(formularioId) {
  const formularios = document.querySelectorAll('.formulario');
  formularios.forEach(form => form.style.display = 'none');

  const formulario = document.getElementById(formularioId);
  formulario.style.display = 'block';
}

function registrar() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioExistente = usuarios.find(user => user.username === username);

  if (usuarioExistente) {
    mostrarMensajeError('Usuario ya registrado. Por favor, elija otro nombre de usuario.');
  } else {
    usuarios.push({ username, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    mostrarMensajeRegistro('Registro exitoso');
  }
}

if (usuario) {
  mostrarMensajeInicioSesion('Inicio de sesión exitoso');
} else {
  mostrarMensajeError('Credenciales incorrectas');
}

function mostrarMensajeRegistro(mensaje) {
  document.getElementById('mensajeRegistro').textContent = mensaje;
  limpiarMensajes();
}

function mostrarMensajeError(mensaje) {
  document.getElementById('mensajeError').textContent = mensaje;
  limpiarMensajes();
}

function limpiarMensajes() {
  setTimeout(() => {
    document.getElementById('mensajeRegistro').textContent = '';
    document.getElementById('mensajeError').textContent = '';
  }, 3000);
}