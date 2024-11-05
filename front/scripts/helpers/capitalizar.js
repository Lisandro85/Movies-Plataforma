const capitalizar=(texto)=>{
    return  texto.trim().toLowerCase().split(' ')
     .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
     .join(' ');
 };

 const capiEspacios=(texto)=>{
    return texto.replace(/\s+/g, ' ').trim().toLowerCase().split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');
 };
 module.exports={
    capitalizar,
    capiEspacios
};