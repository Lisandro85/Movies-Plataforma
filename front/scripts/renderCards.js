//SELECCION DEL CONTENEDOR//

const contenedor=document.getElementById("contenedorpeliculas");

//MAPEO DEL ARRAY//

const renderTarjeta=(data)=>{
    data.forEach(intera => {
  
  /////////CREACION DIV///////////////////////////////////////////////////
      const div=document.createElement('div');

      div.innerHTML=                        
                '<div class="tarjeta">'+
                '<div class="tarjeta-inner">'+
                '<div class="tarjeta-front">'+
                '<h2>' + intera.title + '</a></h2>' +
                '<img src="'+ intera.poster + '" alt="asdasd"/>' +
                '</div>'+
                '<div class="tarjeta-back">'+
                '<p ><span>Año:</span>' + '<br>'+ intera.year + '</p>' +
                '<p ><span>Director:</span>'+ '<br>' + intera.director + '</p>' +
                '<p ><span>Duración:</span>'+ '<br>' + intera.duration + '</p>' +
                '<p ><span>Género:</span>'+ '<br>' + intera.genre.join(' ') + '</p>' +
                '<p ><span>IMDB:</span>'+ '<br>' + intera.rate + '</p>' +
                '</div>'+
                '</div>'+
                '</div>'; 

    ///////////////////////////////INSERTAR AL CONTENEDOR/////////////////////////////////////
  
    contenedor?.appendChild(div); 

     });
  }

  module.exports={
    renderTarjeta};