document.getElementById("register-link").onclick = () => {
  document.querySelector(".login-box").classList.add("hidden");
  document.querySelector(".register-box").classList.remove("hidden");
};

document.getElementById("send-code-btn").onclick = async () => {
  const email = document.getElementById("reg-email").value;
  const code = Math.floor(1000000 + Math.random() * 9000000);
  localStorage.setItem("verificationCode", code);

  await fetch("/api/sendCode", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to: email, code })
  });

  alert(`Se ha enviado un código a ${email}`);
  document.getElementById("verify-section").classList.remove("hidden");
};

document.getElementById("verify-btn").onclick = () => {
  const entered = document.getElementById("verify-code").value;
  const real = localStorage.getItem("verificationCode");
  if (entered == real) {
    const user = {
      name: document.getElementById("username").value,
      email: document.getElementById("reg-email").value,
      photo: document.getElementById("profile-pic").files[0]?.name || "assets/avatars/avatar1.png",
      xp: 0,
      level: 1
    };
    localStorage.setItem("rqUser", JSON.stringify(user));
    alert("Cuenta verificada ✅");
    window.location.href = "avatar.html";
  } else {
    alert("Código incorrecto ❌");
  }
};

document.getElementById("login-btn").onclick = () => {
  const email = document.getElementById("email").value;
  const saved = JSON.parse(localStorage.getItem("rqUser"));
  if (saved && saved.email === email) {
    alert(`Bienvenido ${saved.name} 😎`);
    window.location.href = "index.html";
  } else {
    alert("Usuario no encontrado");
  }
};
