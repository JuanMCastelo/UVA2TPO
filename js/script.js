document.addEventListener('DOMContentLoaded', () => {
  // Botones modo claro/oscuro
  const btnLight = document.getElementById('btn-light');
  const btnDark  = document.getElementById('btn-dark');

  // Carga del tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Manejadores para alternar tema
  if (btnLight) {
    btnLight.addEventListener('click', () => {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    });
  }
  if (btnDark) {
    btnDark.addEventListener('click', () => {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    });
  }

  // Validación de formulario sólo si existe en la página
  const form = document.getElementById('contactForm');
  if (form) {
    const msgContainer = document.getElementById('formMessage');

    /**
     * Valida el formato de un correo electrónico
     * @param {string} email
     * @returns {boolean}
     */
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      msgContainer.innerHTML = '';

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
        const list = errors.map(err => `<li>${err}</li>`).join('');
        msgContainer.innerHTML = `
          <div class="alert alert-danger" role="alert">
            <ul class="mb-0">${list}</ul>
          </div>`;
      } else {
        msgContainer.innerHTML = `
          <div class="alert alert-success" role="alert">
            Gracias por su contacto, <strong>${nombre}</strong>.<br>
            En breve le estaré respondiendo.
          </div>`;
        form.reset();
      }
    });
  }
});
