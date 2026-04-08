//definir una funcion de tipo asincrona
const getDataApi = async () => {
  try {
    //a esperar la respuesta del servidor
    //fetch => llamar al servidor
    //await espera al servidor
    const response = await fetch("data.json",{
        method :"GET"
    });
    //console.log(response);
    //convertirmos a un objeto usable por javascript
    const data = await response.json();
    mostrarPersonajes(data.results);
    //data de la api
    //console.log(data);
  } catch (error) {
    console.error("Es un error personalizdo", error);
  }
};

const mostrarPersonajes = (personajes = []) => {
  //console.log("estoy en la funcioon",personajes);
  //vamos a obtener del html el contenedor
  const contenedor = document.getElementById("container");
  personajes.forEach((personaje) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta", "tarjeta_2");
    tarjeta.innerHTML = `
    <img src="${personaje.image}"/>
    <h3>${personaje.name}</h3>
    <p><b>Status:</b> ${personaje.status}</p>
    <p><b>Especie:</b> ${personaje.species}</p>
    `;
    //console.log(personaje);
    contenedor.appendChild(tarjeta);
  });
};

/*
  fetch("https://rickandmortyapi.com/api/character")
  .then( res => res.json())
  .then( data => console.log("then",data))
  .catch(error => console.log(error))
*/

getDataApi();
