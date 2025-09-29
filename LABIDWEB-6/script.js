const password = document.getElementById("contraseña");
const confirmar = document.getElementById("confirmar");
const toggleBtn1 = document.getElementById("toggleBtn1");
const toggleBtn2 = document.getElementById("toggleBtn2");
const mensaje = document.getElementById("mensaje");
const formulario = document.getElementById("formulario");

// Botón Ver/Ocultar para contraseña
toggleBtn1.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggleBtn1.textContent = "Ocultar";
  } else {
    password.type = "password";
    toggleBtn1.textContent = "Ver";
  }
});

// Botón Ver/Ocultar para confirmar contraseña
toggleBtn2.addEventListener("click", () => {
  if (confirmar.type === "password") {
    confirmar.type = "text";
    toggleBtn2.textContent = "Ocultar";
  } else {
    confirmar.type = "password";
    toggleBtn2.textContent = "Ver";
  }
});

// Validar que las contraseñas coincidan
confirmar.addEventListener("input", () => {
  if (password.value !== confirmar.value) {
    mensaje.textContent = "Las contraseñas no coinciden";
  } else {
    mensaje.textContent = "Las contraseñas coinciden";
  }
});

// Validar al enviar el formulario
formulario.addEventListener("submit", (e) => {
  if (password.value !== confirmar.value) {
    e.preventDefault();
    alert("Las contraseñas deben coincidir");
  }
});