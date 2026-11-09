const anio = document.getElementById("anio");
if (anio) {
  anio.textContent = new Date().getFullYear();
}

const btnMenu = document.querySelector(".menu-btn");
const listaNav = document.getElementById("lista-nav");

if (btnMenu && listaNav) {
  btnMenu.addEventListener("click", () => {
    const abierto = listaNav.classList.toggle("abierto");
    btnMenu.setAttribute("aria-expanded", abierto);
  });
}

const btnTema = document.getElementById("btn-tema");

function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  if (btnTema) {
    btnTema.textContent = oscuro ? "Modo claro" : "Modo oscuro";
  }
}

aplicarTema(localStorage.getItem("tema") === "oscuro");

if (btnTema) {
  btnTema.addEventListener("click", () => {
    const oscuro = !document.body.classList.contains("oscuro");
    aplicarTema(oscuro);
    localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
  });
}

const btnSubir = document.createElement("button");
btnSubir.className = "subir";
btnSubir.textContent = "↑ Subir";
btnSubir.hidden = true;
document.body.appendChild(btnSubir);

window.addEventListener("scroll", () => {
  btnSubir.hidden = window.scrollY < 350;
});

btnSubir.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

