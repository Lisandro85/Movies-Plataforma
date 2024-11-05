const {selectElemntDom}=require("./selectElementDom")
const {capitalizar,capiEspacios}=require("./helpers/capitalizar");
const {formatearHora}=require("./helpers/formatearHora");
const {valoresCheck}=require("./valoresCheck");

const generarObj=()=>{	

    const{titulo,director,año,duracion,imdb,url}=selectElemntDom();
  
    const tituloCap = capitalizar(titulo);
    const directorCap =capiEspacios(director); 
    const duracionFinal = formatearHora(duracion);
    const generos=valoresCheck();
  
    const newMovie={   
            title:tituloCap,
            director:directorCap,
            year:año,
            duration:duracionFinal,
            rate:imdb,
            genre:generos,
            poster:url
        };
        return newMovie;
    };  
module.exports={generarObj};