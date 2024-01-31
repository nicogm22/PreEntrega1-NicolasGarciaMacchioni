console.log("123as")

const botonRegistro = document.getElementById('botonRegistro')
const botonInicioSesion = document.getElementById('botonInicioSesion')

botonRegistro.addEventListener('click', registrar)
botonInicioSesion.addEventListener('click', iniciarSesion)

// Función para mostrar un formulario específico y ocultar los demás
function mostrarFormulario(formularioId) {
  // Oculta todos los formularios
  const formularios = document.querySelectorAll('.formulario');
  formularios.forEach(form => form.style.display = 'none');

  // Muestra el formulario específico
  const formulario = document.getElementById(formularioId);
  formulario.style.display = 'block';
}

// Función para registrar un nuevo usuario
function registrar() {
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  // Verificar si el usuario ya existe en localStorage
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioExistente = usuarios.find(user => user.username === username);

  if (usuarioExistente) {
    mostrarMensajeError('Usuario ya registrado. Por favor, elija otro nombre de usuario.');
  } else {
    // Registrar nuevo usuario en localStorage
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