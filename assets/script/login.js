const box = document.getElementById('mainBox');
const title = document.getElementById('title');
const desc = document.getElementById('desc');
const btn = document.getElementById('swpbtn');

function toggle() {
    box.classList.toggle('active');
    const isRegister = box.classList.contains('active');

    title.innerText = isRegister ? "¿Ya tienes cuenta?" : "¿Eres nuevo?";
    desc.innerText = isRegister ? "Inicia sesión aquí" : "Regístrate para ver más contenido";
    btn.innerText = isRegister ? "Aún no tengo cuenta" : "Ya tengo cuenta";
}

function enviar(tipo) {
    //Aquí iría la lógica AJAX futura (fetch)
}