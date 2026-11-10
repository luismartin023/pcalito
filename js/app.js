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

const contCatalogo = document.getElementById("catalogo");

const servicios = [
  {
    nombre: "Limpieza interna + pasta térmica",
    categoria: "mantenimiento",
    precio: 1200,
    descripcion:
      "Desarmamos, limpiamos el polvo y cambiamos la pasta. Lista el mismo día.",
    imagen: "img/limpieza.jpg",
    alt: "Ventilador y disipador de computadora con polvo antes de la limpieza",
  },
  {
    nombre: "Formateo + Windows instalado",
    categoria: "mantenimiento",
    precio: 1800,
    descripcion:
      "PC como nueva: Windows activado, drivers y programas básicos.",
    imagen: "img/formateo.jpg",
    alt: "Laptop Lenovo encendida mostrando el escritorio de Windows",
  },
  {
    nombre: "Cambio de pantalla de laptop",
    categoria: "reparacion",
    precio: 4000,
    descripcion:
      "Mano de obra incluida. El repuesto se cotiza según tu modelo.",
    imagen: "img/pantalla.jpg",
    alt: "Panel de pantalla LCD de laptop desmontado con sus bisagras",
  },
  {
    nombre: "Cambio de batería",
    categoria: "reparacion",
    precio: 2200,
    descripcion:
      "Batería nueva con garantía de 3 meses. 2 a 4 días según el modelo.",
    imagen: "img/bateria.jpg",
    alt: "Batería recargable de litio para laptop",
  },
  {
    nombre: "Ensamble de PC gamer a medida",
    categoria: "gaming",
    precio: 3500,
    descripcion:
      "La armamos pieza por pieza contigo y la probamos antes de entregarla.",
    imagen: "img/gamer.jpg",
    alt: "Interior de PC gamer blanca con tarjeta gráfica RTX y luces RGB",
  },
  {
    nombre: "Upgrade de RAM y SSD",
    categoria: "gaming",
    precio: 900,
    descripcion: "Le metemos más memoria o un disco rápido a tu PC actual.",
    imagen: "img/upgrade.jpg",
    alt: "Unidad de estado sólido Samsung 980 PRO NVMe de 1 TB",
  },
  {
    nombre: "Mouse gamer con luces",
    categoria: "accesorios",
    precio: 850,
    descripcion: "De los más vendidos: buen sensor, RGB y botones extras.",
    imagen: "img/mouse.jpg",
    alt: "Mouse gamer negro Razer con rueda y botones laterales",
  },
  {
    nombre: "Diagnóstico con informe escrito",
    categoria: "diagnostico",
    precio: 500,
    descripcion: "Te decimos qué tiene tu equipo y cuánto cuesta arreglarlo.",
    imagen: "img/diagnostico.jpg",
    alt: "Placa base de laptop abierta en revisión técnica",
  },
];

const inpBuscar = document.getElementById("buscar");
const selCategoria = document.getElementById("categoria");
const pContador = document.getElementById("contador");

function precioRD(valor) {
  return valor.toLocaleString("es-DO", { style: "currency", currency: "DOP" });
}

function pintarTarjetas(lista) {
  contCatalogo.innerHTML = "";
  if (lista.length === 0) {
    contCatalogo.innerHTML =
      "<p>Nada coincide con esa búsqueda. Pregunta en la tienda igual, seguro lo conseguimos.</p>";
  }
  lista.forEach((s) => {
    const card = document.createElement("article");
    card.className = "tarjeta";
    card.innerHTML =
      `<img src="${s.imagen}" alt="${s.alt}" width="600" height="400">` +
      `<p class="cat">${s.categoria}</p>` +
      `<h3>${s.nombre}</h3>` +
      `<p class="desc">${s.descripcion}</p>` +
      `<p class="precio">${precioRD(s.precio)}</p>`;
    contCatalogo.appendChild(card);
  });
  pContador.textContent = `Mostrando ${lista.length} de ${servicios.length} servicios`;
}

function filtrar() {
  const texto = inpBuscar.value.trim().toLowerCase();
  const cat = selCategoria.value;
  const lista = servicios.filter((s) => {
    const okCat = cat === "todas" || s.categoria === cat;
    const okTxt =
      texto === "" ||
      s.nombre.toLowerCase().includes(texto) ||
      s.descripcion.toLowerCase().includes(texto);
    return okCat && okTxt;
  });
  pintarTarjetas(lista);
}

if (contCatalogo) {
  pintarTarjetas(servicios);
  inpBuscar.addEventListener("input", filtrar);
  selCategoria.addEventListener("change", filtrar);
}

