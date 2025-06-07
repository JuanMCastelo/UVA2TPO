document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msgContainer = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    msgContainer.innerHTML = '';  // limpiar mensajes previos

    const nombre  = form.nombre.value.trim();
    const email   = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();
    const errors  = [];

    // Validaciones
    if (!nombre) {
      errors.push('• Por favor, ingresa tu nombre.');
    }
    if (!email) {
      errors.push('• Por favor, ingresa tu correo electrónico.');
    } else if (!validateEmail(email)) {
      errors.push('• Por favor, ingresa un correo válido.');
    }
    if (!mensaje) {
      errors.push('• Por favor, escribe un mensaje.');
    }

    if (errors.length > 0) {
      // Mostrar lista de errores
      const list = errors.map(err => `<li>${err}</li>`).join('');
      msgContainer.innerHTML = `
        <div class="alert alert-danger" role="alert">
          <ul class="mb-0">${list}</ul>
        </div>`;
    } else {
      // Éxito
      msgContainer.innerHTML = `
        <div class="alert alert-success" role="alert">
          Gracias por su contacto, <strong>${nombre}</strong>.<br>
          En breve le estaré respondiendo.
        </div>`;
      form.reset();
    }
  });

  function validateEmail(email) {
    // regex simple para validar email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
