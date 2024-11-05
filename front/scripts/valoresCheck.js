const valoresCheck=()=>{
    const generos = [];
    if (document.getElementById('accionCheckbox').checked) generos.push('Action');
    if (document.getElementById('aventuraCheckbox').checked) generos.push('Adventure');
    if (document.getElementById('dramaCheckbox').checked) generos.push('Drama');
    if (document.getElementById('comediaCheckbox').checked) generos.push('Comedy');
    if (document.getElementById('terrorCheckbox').checked) generos.push('Horror');
    if (document.getElementById('cienciaFiccionCheckbox').checked) generos.push('Sci-Fi');
    if (document.getElementById('fantasiaCheckbox').checked) generos.push('Fantasy');
    return generos;
};

module.exports={valoresCheck};