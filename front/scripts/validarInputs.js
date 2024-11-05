const {generarObj}=require("./generarObj")

const validarInputs = () => {
    const obj = generarObj();    
    let resultado=true;
    if (!obj.title || typeof obj.title !== "string") {  
        alert("Ingrese TITULO")
        resultado=false;
    
    } else if(!obj.director){
        alert("Ingrese DIRECTOR")
        resultado=false;
    } else if (!/^[a-zA-Z\s]+$/.test(obj.director)){
        alert("El campo DIRECTOR admite solo letras y espacios")
        resultado=false;    
    }
        
    else if (!obj.year){
        alert("Ingrese AÑO")
        resultado=false;
    }else if(isNaN(obj.year)){
        alert("El AÑO debe ser un número")
        resultado=false;
    }else if(obj.year.toString().length !==4){
        alert("El AÑO debe contener cuatro dígitos")
        resultado=false;
    }    
    else if(obj.year<1888 || obj.year>new Date().getFullYear()){
        alert("El AÑO debe estar entre 1888 y el AÑO actual")
        resultado=false;
    
    }else if(!obj.duration || typeof obj.duration !== "string"){
        alert("Ingrese DURACION")
        resultado=false;
    }
    
    else if(!obj.rate){
        alert("Ingrese IMDB")
        resultado=false;
    }else if(isNaN(obj.rate) || Number(obj.rate) < 1 || Number(obj.rate) > 10){
        alert("El IMDB debe ser un número entre 1 y 10 (puede ser entero o decimal)")
        resultado=false;
    
    }else if (obj.genre.length === 0 && Array.isArray(obj.genre)) {
        alert("Por favor, selecciona al menos un género.");
        resultado=false;

    }else if(!obj.poster) {
        alert("Ingrese una URL");
        resultado=false;
    }else if(!/^(https?:\/\/[^\s$.?#].[^\s]*)$/.test(obj.poster)){ 
        alert("Ingrese una URL válida");
        resultado=false;    
    }
    
    return resultado;
    }

    module.exports={validarInputs}