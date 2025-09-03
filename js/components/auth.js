// js/auth.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  // Simulación de usuarios (esto luego se puede conectar a JSON o backend)
  const usuarios = [
    { email: "usuario@duoc.cl", password: "123456" },
    { email: "gamer@test.com", password: "abcdef" }
  ];

  const user = usuarios.find(u => u.email === email && u.password === password);

  if (user) {
    if (email.endsWith("@duoc.cl")) {
      message.textContent = "¡Bienvenido! Tienes un 20% de descuento permanente 🎉";
    } else {
      message.textContent = "Login exitoso. Bienvenido a LevelUp Gamer 😎";
    }
    message.style.color = "lime";
  } else {
    message.textContent = "Correo o contraseña incorrectos.";
    message.style.color = "red";
  }
});
