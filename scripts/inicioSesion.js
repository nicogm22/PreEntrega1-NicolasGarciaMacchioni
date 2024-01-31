console.log('asdas')

botonRegistro.addEventListener('click', registrar)
botonInicioSesion.addEventListener('click', iniciarSesion)


function mostrarFormulario(formularioId) {
  const formularios = document.querySelectorAll('.formulario');
  formularios.forEach(form => form.style.display = 'none');

  const formulario = document.getElementById(formularioId);
  formulario.style.display = 'block';
}


function iniciarSesion() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(user => user.username === username && user.password === password);

  if (usuario) {
    mostrarMensajeInicioSesion('Inicio de sesión exitoso');
  } else {
    mostrarMensajeError('Credenciales incorrectas');
  }

  function mostrarMensajeInicioSesion(mensaje) {
    document.getElementById('mensajeInicioSesion').textContent = mensaje;
    limpiarMensajes();
  }

  function mostrarMensajeError(mensaje) {
    document.getElementById('mensajeError').textContent = mensaje;
    limpiarMensajes();
  }

  function limpiarMensajes() {
    setTimeout(() => {
      document.getElementById('mensajeInicioSesion').textContent = '';
      document.getElementById('mensajeError').textContent = '';
    }, 3000);
  }
}