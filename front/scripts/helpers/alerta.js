const alertas=()=>{
    const imagenes = document.getElementsByClassName("imges");
    const enlaces = document.getElementsByClassName("link");
    
    Array.from(imagenes).forEach((imagen, index) => { 
        imagen.addEventListener("click", (event) => { 
        event.preventDefault(); 
        if (confirm("Estás por salir de Movies For You, ¿estás seguro?")) {
            const target = enlaces[index].target === "_blank" ? "_blank" : "_self";
            window.open(enlaces[index].href, target);
             }
        });
    });
};
module.exports={alertas};



