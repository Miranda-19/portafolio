// ========== MENÚ HAMBURGUESA ==========
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('activo');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        nav.classList.remove('activo');
    });
});

// ========== MODO OSCURO / CLARO ==========
const btnModo = document.getElementById('btnModo');

btnModo.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    
    if (document.body.classList.contains('oscuro')) {
        btnModo.textContent = '☀️';
        localStorage.setItem('modo', 'oscuro');
    } else {
        btnModo.textContent = '🌙';
        localStorage.setItem('modo', 'claro');
    }
});

// Recordar el modo elegido
if (localStorage.getItem('modo') === 'oscuro') {
    document.body.classList.add('oscuro');
    btnModo.textContent = '☀️';
}

// ========== VALIDACIÓN DE FORMULARIO ==========
const form = document.getElementById('formContacto');
const mensajeForm = document.getElementById('mensajeForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
        mensajeForm.textContent = 'Por favor completa todos los campos.';
        mensajeForm.className = 'mensaje-form error';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        mensajeForm.textContent = 'Ingresa un correo electrónico válido.';
        mensajeForm.className = 'mensaje-form error';
        return;
    }

    // Si todo está bien
    mensajeForm.textContent = '¡Mensaje enviado correctamente! (simulado)';
    mensajeForm.className = 'mensaje-form exito';
    form.reset();
});

// ========== AÑO AUTOMÁTICO EN EL FOOTER ==========
document.getElementById('anio').textContent = new Date().getFullYear();