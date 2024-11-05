const axios=require("axios");
const  {validarInputs}=require("./validarInputs");
const {generarObj}=require("./generarObj");
const { btnLimpiar } = require("./helpers/btnLimpiar");

const sendMovie= async()=>{

const formulario = document.getElementById("formulario");
const btn=document.getElementById("btnLimpiar");

btnLimpiar(btn,formulario);   

formulario?.addEventListener("submit",async (event) => {
event.preventDefault();
if(validarInputs()){
let movie=generarObj();

try{ const response=await axios.post("http://localhost:3000/movies",movie)
    alert(response.data.message);

const cargarOtra = confirm("¿Deseas crear otra pelicula?");
if (cargarOtra) {
    formulario.reset();
} else {
 window.location.href = "index.html";
}

}catch (error){
    if (error.response) {
        if (error.response.data && error.response.data.message) {
            alert(`Error del servidor: ${error.response.data.message}`);
        } else {
            alert(`Error del servidor: Código de estado ${error.response.status}`);
        }
    } else if (error.request) {
        alert("No se recibió respuesta del servidor.");
    } else {
        alert(`Error al realizar la solicitud: ${error.message}`);
    }

    }
}    
 });
};
module.exports={sendMovie};


