const { renderTarjeta } = require("./renderCards");
const{sendMovie}=require("./sendMovie");
const axios = require("axios");
const {alertas}=require("./helpers/alerta");
const {efectoLetra}=require("./efectoLetra");

document.addEventListener("DOMContentLoaded", () => {
  alertas()
  efectoLetra()
});


const requestMovies = async () => {
    try {
        const resp = await axios.get("http://localhost:3000/movies");
        console.log("Solicitud Exitosa");
        renderTarjeta(resp.data);
    } catch (error) {
        console.log("Error de conexión con el servidor",error);   
        alert("Servidor Offline");
};
};

const contenedor=document.getElementById("contenedorpeliculas");
const formulario = document.getElementById("formulario");

if(contenedor){
  requestMovies()
}else if(formulario){
  sendMovie();
};




 