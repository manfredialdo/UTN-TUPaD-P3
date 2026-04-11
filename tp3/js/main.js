// js/main.js

const cargarCategorias = (lista) => {
    const ulCategorias = document.getElementById("lista-categorias");
    ulCategorias.innerHTML = ""; // Limpiar

    lista.forEach(cat => {
        const li = document.createElement("li");        
        li.innerHTML = `<a href="#" data-id="${cat.id}">${cat.nombre}</a>`;
        ulCategorias.appendChild(li);
    });
};

// mostrar los productos
const mostrarMenu = (datos) => {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = ""; 

    datos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.alt}" title="${producto.title}" style="width:200px;">
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>$${producto.precio}</strong></p>
            <button type="button" class="btn-agregar" data-nombre="${producto.titulo}">Agregar</button>
        `;

        contenedor.appendChild(tarjeta);
    });
};

// eventos
document.addEventListener("click", (e) => {
    // Alerta al presionar "Agregar"
    if (e.target.classList.contains("btn-agregar")) {
        const nombre = e.target.getAttribute("data-nombre");
        alert(`Producto añadido: ${nombre}`);
    }
    if (e.target.dataset.id) {
        e.preventDefault();
        const seleccion = e.target.dataset.id;
        
        if (seleccion === "todos") {
            mostrarMenu(menu);
        } else {
            const productosFiltrados = menu.filter(p => p.categoria === seleccion);
            mostrarMenu(productosFiltrados);
        }
    }
});

// Ejecución inicial
cargarCategorias(categorias);
mostrarMenu(menu);