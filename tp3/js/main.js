const getDataApi = async () => {
  try {
    // Apuntamos a la carpeta js donde está el json
    const response = await fetch("js/data.json"); 
    
    // Convertimos la respuesta
    const data = await response.json();
    
    // Como el JSON es un array directo, pasamos 'data' directamente
    mostrarMenu(data);
    
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
};

const mostrarMenu = (productos = []) => {
  const contenedor = document.getElementById("container");
  
  // Limpiamos el contenedor por si acaso
  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const tarjeta = document.createElement("article"); // Usamos article para mejor semántica
    tarjeta.classList.add("tarjeta");
    
    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.alt}" title="${producto.title}"/>
        <h3>${producto.titulo}</h3>
        <p>${producto.descripcion}</p>
        <p><b>Precio:</b> $${producto.precio}</p>
        <button type="button">Agregar</button>
    `;
    
    contenedor.appendChild(tarjeta);
  });
};

// Ejecutamos la función
getDataApi();