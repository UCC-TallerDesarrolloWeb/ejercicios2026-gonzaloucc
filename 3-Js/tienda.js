const productos = [
  {
    nombre: "Cabezal Sparring",
    description: "Cabezal de Sparring.",
    categoria: "Protectores",
    marca: "Gran Marc",
    talle: ["1", "2", "3"],
    precio: 35000,
    web: "https://www.granmarctiendaonline.com.ar/productos/cabezal-cerrado/",
    imagen: "cabezal-cerrado.webp",
  },
  {
    nombre: "Dobok Dan",
    description: "Bobok aprobado para torneos internacionales.",
    categoria: "Dobok",
    marca: "Daedo",
    talle: ["1", "2", "3", "4", "5", "6", "7", "8"],
    precio: 115000,
    web: "https://www.daedo.com/products/taitf-10813",
    imagen: "dobok.webp",
  },
  {
    nombre: "Escudo de Potencia",
    description: "Escudo de potencia para entrenamientos.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 51700,
    web: "https://www.granmarctiendaonline.com.ar/productos/escudo-de-potencia-grande/",
    imagen: "escudo-potencia.webp",
  },
  {
    nombre: "Par de focos redondos",
    description: "Par de focos de 25cm x 25cm para hacer entrenamiento.",
    categoria: "Entrenamiento",
    marca: "Gran Marc",
    talle: ["s/talle"],
    precio: 15000,
    web: "https://www.granmarctiendaonline.com.ar/productos/foco-con-dedos/",
    imagen: "foco-con-dedos.webp",
  },
  {
    nombre: "Guantes 10 onzas",
    description:
      "Guantes de Sparring de 10 onzas habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["s/talle"],
    precio: 35000,
    web: "https://www.daedo.com/products/pritf-2020",
    imagen: "protectores-manos.webp",
  },
  {
    nombre: "Protectores Pie",
    description: "Protectores de Pie habilitados para torneos internacionales",
    categoria: "Protectores",
    marca: "Daedo",
    talle: ["XXS", "XS", "S", "M", "L", "XL"],
    precio: 35000,
    web: "https://www.daedo.com/collections/collection-itf-gloves/products/pritf-2022",
    imagen: "protectores-manos.webp",
  },
];

function mostrarModal(num) {
  const producto = productos[num];
  const modal = document.getElementById("modal");

  if (!producto || !modal) return;

  document.getElementById("nombre-producto").textContent = producto.nombre;
  document.getElementById("descripcion-producto").textContent = producto.description;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.style.display = "block";
  }
}

function cerrarModal() {
  const modal = document.getElementById("modal");

  if (!modal) return;

  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.style.display = "none";
  }
}

function mostrarCatalogo() {
  const catalogo = document.getElementById("catalogo");

  if (!catalogo) return;

  const contenido = productos
    .map(
      (producto, id) => `
        <div>
          <img src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <button type="button" onclick="mostrarModal(${id})">Ver detalles del producto</button>
          <button type="button" onclick="agragrAlCarrito(${id})">Agregar al Carrito</button>
        </div>
      `
    )
    .join("");

  catalogo.innerHTML = contenido;
}

function agragrAlCarrito(num) {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");
  carritoGuardado.push(num);
  localStorage.setItem("carrito", JSON.stringify(carritoGuardado));
}

function mostrarCarrito() {
  const carrito = document.getElementById("carrito");

  if (!carrito) return;

  let carritoList = JSON.parse(localStorage.getItem("carrito") || "[]");

  if (!Array.isArray(carritoList)) {
    carritoList = [];
  }

  const contenido = carritoList.length
    ? carritoList
        .map((num) => {
          const producto = productos[num];
          return `
            <div>
              <h3>${producto ? producto.nombre : "Producto no disponible"}</h3>
              <p>${producto ? producto.precio : 0}</p>
            </div>
          `;
        })
        .join("")
    : "<p>No hay productos en el carrito.</p>";

  carrito.innerHTML = contenido;
}