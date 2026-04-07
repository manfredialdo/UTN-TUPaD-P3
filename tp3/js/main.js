const getDataApi = async () => {
  try {
    // Aquí podrías usar fetch a tu propio JSON en GitHub
    // Por ahora, simulamos la respuesta de la API con tus datos reales
    const productos = [
      {
        id: 1,
        titulo: "Choripán",
        descripcion: "un clásico argentino: pan, chorizo de cerdo y chimi.",
        precio: "1500",
        imagen: "https://raw.githubusercontent.com/manfredialdo/UTN-TUPaD-P3/main/tp1/assets/chori.jpg",
        alt: "el choripan es monton de tripas de chancho todas condimentadas picadas metidas dentro de otra tripa y despues todas cocidas .. caliente salido de la parri todo eso metido dentro de un pan blanco... si te da la gana hay aderezo...",
        title: "el chori de la casa"
      },
      {
        id: 2,
        titulo: "Empanada",
        descripcion: "Empanada salteña de carne cortada a cuchillo, frita y a leña.",
        precio: "800",
        imagen: "https://raw.githubusercontent.com/manfredialdo/UTN-TUPaD-P3/main/tp1/assets/empanada.jpg",
        alt: "la empanada es ese tesoro de masa dorada, horneada o frita en grasa caliente hasta que burbujea... y q adentro guarda un corazón con carne cortada a cuchillo, mucha cebolla rehogada, morron y un juguito que se te corre por entre el brazo y si no abrís bien las piernas podes mancharte... es el resumen de la felicidad envuelto en un repulgue artesanal...",
        title: "la empanada de la casa, con carne cortada a cuchillo"
      },
      {
        id: 3,
        titulo: "vino con soda",
        descripcion: "vino, soda y adentro.",
        precio: "2500",
        imagen: "https://raw.githubusercontent.com/manfredialdo/UTN-TUPaD-P3/main/tp1/assets/visoda.jpg",
        alt: "el vino con soda es ese tinto en caja, fuerte y con cuerpo, que se doma con el golpe de burbujas del sifón bien frío... es el refresco de los dioses del barrio, servido en vaso de vidrio grueso con un par de hielos que tintinean mientras esperás el asado... es un equilibrio entre la uva madura y el gas que te raspa la garganta justo como tiene que ser...",
        title: "vino con soda, un clasico"
      }
    ];

    mostrarProductos(productos);
  } catch (error) {
    console.error("Error cargando el menú personalizado", error);
  }
};

const mostrarProductos = (productos = []) => {
  const contenedor = document.getElementById("productos-js");
  
  productos.forEach((p) => {
    // Creamos el elemento article para cada producto
    const articulo = document.createElement("article");
    
    // Inyectamos el HTML dinámico
    // El campo ${p.alt} contendrá toda la descripción detallada (el "tesoro de masa", las "tripas", etc.)
    articulo.innerHTML = `
        <img src="${p.imagen}" 
             alt="${p.alt}" 
             title="${p.title}" 
             width="150" 
             height="150">
        <h3>${p.titulo}</h3>
        <p>${p.descripcion}</p>
        <p>Precio: <strong>$${p.precio}</strong></p>
        <button type="button">Agregar</button>
        <br><br>
    `;
    
    // Agregamos el artículo al contenedor principal
    contenedor.appendChild(articulo);
  });
};
getDataApi();