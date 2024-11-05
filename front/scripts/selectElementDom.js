const selectElemntDom=()=>{

    const titulo = document.getElementById("tituloInput").value;
    const director = document.getElementById("directorInput").value;
    const año = document.getElementById("añoInput").value;
    const duracion = document.getElementById("duracionInput").value;
    const imdb = document.getElementById("imdbInput").value;
    const url = document.getElementById("urlInput").value;

    return {titulo,director,año,duracion,imdb,url}
};

module.exports={selectElemntDom};