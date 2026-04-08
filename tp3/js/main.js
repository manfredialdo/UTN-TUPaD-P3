const mostrarMenu = (datos) => {
    const contenedor = document.getElementById("container");
    
    // Limpiamos el contenedor por si hay contenido previo
    contenedor.innerHTML = "";

    datos.forEach((producto) => {
        // Creamos el elemento tarjeta
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        // Inyectamos el HTML con los datos del array
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.alt}" title="${producto.title}">
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>$${producto.precio}</strong></p>
            <button type="button" class="btn-agregar">Agregar</button>
        `;

        // Agregamos la tarjeta al contenedor del index
        contenedor.appendChild(tarjeta);
    });
};

// Llamamos a la función pasando nuestra constante 'menu' de data.js
mostrarMenu(menu);